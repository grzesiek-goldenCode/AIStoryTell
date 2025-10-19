import { NextResponse } from "next/server";
import OpenAI from "openai";
import { storyLimiter } from "@/lib/upstash";
import { headers } from "next/headers";

const client = new OpenAI();

export async function POST(req: Request) {
  const { name, theme, age } = await req.json();

  if (name.length > 30 || theme.length > 300) {
    return new Response(
      JSON.stringify({ error: "Przekroczono limit znaków" }),
      { status: 400 }
    );
  }
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { success } = await storyLimiter.limit(ip);
  if (!success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  const response = await client.responses.create({
    model: "gpt-4o-mini",

    input: [
      {
        role: "developer",
        content:
          "Zachowuj się jak profesionalny, doświadczony opowiadacz bajek dla dzieci. Tytuł ma być na początku opowieści oddzielony od reszty w formie ** Tytuł **",
      },
      {
        role: "user",
        content: ` Napisz  bajkę dla dziecka w wieku ${age} lat, bohater o imieniu ${name}, temat: ${theme}. Bajka ma mieć prostą fabułę i krótki morał na końcu`,
      },
    ],
  });

  const data = response.output_text;

  return NextResponse.json(data);
}
