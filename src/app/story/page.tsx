"use client";
import StoryForm from "@/components/StoryForm";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import MagicLoader from "@/components/MagicLoader";
import ErrorMessage from "@/components/ErrorMessage";

export default function StoryPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function onRetry() {
    window.location.reload();
  }

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

        if (res.status === 429) {
          setError("Osiągnięto limit bajek na dziś, spróbuj ponownie jutro");
          return;
        }

        if (!res.ok) {
          alert(result.error);
          return;
        }

        //Save story to localstorage
        localStorage.setItem("story", result);

        router.push("/story/result");
      } catch (err: any) {
        setError(
          "Rozsypał się nam magiczny pył, jak tylko opanujemy sytuację wrócimy z bajką!"
        );
      }
    });
  }
  return (
    <div>
      {error ? (
        <ErrorMessage message={error} onRetry={onRetry} />
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh]">
          {isPending ? (
            <MagicLoader />
          ) : (
            <div>
              <h2 className="m-5 lg:m-3 mb-5 text-2xl p-1">
                Podaj kilka szczegółów dla Twojej bajki
              </h2>
              <StoryForm onGenerate={handleGenerate} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ToDo - ratelimiter lub inne zabezpieczenie spamowe
