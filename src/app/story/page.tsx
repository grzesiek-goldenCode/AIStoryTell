"use client";
import StoryForm from "@/components/StoryForm";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import MagicLoader from "@/components/MagicLoader";

export default function StoryPage() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  async function handleGenerate(data: {
    name: string;
    theme: string;
    age: string;
  }) {
    startTransition(async () => {
      try {
        const res = await fetch("api/generate-story", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await res.json();

        if (!res.ok) {
          const data = await res.json();
          alert(data.error);
          return;
        }

        localStorage.setItem("story", result);

        router.push("/story/result");
      } catch (err) {
        console.error(err);
        alert("Wystąpił problem z generowaniem bajki");
      }
    });
  }
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      {isPending ? (
        <MagicLoader />
      ) : (
        <div>
          <h2 className="m-3 mb-5 text-2xl">
            Podaj kilka szczegółów dla Twojej bajki
          </h2>
          <StoryForm onGenerate={handleGenerate} />
        </div>
      )}
    </div>
  );
}

// ToDo - ratelimiter lub inne zabezpieczenie spamowe
