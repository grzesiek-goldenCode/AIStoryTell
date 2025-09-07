"use client";
import StoryForm from "@/components/StoryForm";

export default function StoryPage() {
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
    console.log(result);
  }
  return (
    <div>
      <h2>Podaj kilka szczegółów dla Twojej bajki</h2>
      <StoryForm onGenerate={handleGenerate} />
    </div>
  );
}
