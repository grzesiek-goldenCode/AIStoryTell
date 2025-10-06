"use client";
import StoryForm from "@/components/StoryForm";
import { useRouter } from "next/navigation";

export default function StoryPage() {
  const router = useRouter();
  async function handleGenerate(data: {
    name: string;
    theme: string;
    age: string;
  }) {
    const res = await fetch("api/generate-story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    localStorage.setItem("story", result);

    router.push("/story/result");
  }
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h2 className="m-3 mb-5 text-2xl">
        Podaj kilka szczegółów dla Twojej bajki
      </h2>
      <StoryForm onGenerate={handleGenerate} />
    </div>
  );
}

// ToDo - ratelimiter lub inne zabezpieczenie spamowe
