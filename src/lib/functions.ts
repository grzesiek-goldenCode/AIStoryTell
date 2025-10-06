export function SplitTitle(story: string) {
  const titleMatch = story.match(/\*\*(.*?)\*\*/);
  const extractedTitle = titleMatch ? titleMatch[1] : "Bez tytułu";
  const storyBody = story.replace(/\*\*(.*?)\*\*\s*/, "").trim();
  return [extractedTitle, storyBody];
}
