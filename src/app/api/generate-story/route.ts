import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI();

export async function POST(req: Request) {
  const { name, theme, age } = await req.json();
  const response = await client.responses.create({
    model: "gpt-4o-mini",

    input: [
      {
        role: "developer",
        content:
          "Zachowuj się jak profesionalny, doświadczony opowiadacz bajek dla dzieci.",
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
