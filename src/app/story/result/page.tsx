"use client";
import { sampleStory } from "@/lib/devHelper";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import MobileView from "@/components/MobileView";
import NormalView from "@/components/NormalView";
import { SplitTitle } from "@/lib/functions";

export default function StoryView() {
  const [story, setStory] = useState<string[] | null>([
    "Pracujemy nad Twoją bajką...",
  ]);
  const [title, setTitle] = useState<string>("Twoja bajka");

  useEffect(() => {
    const savedStory = localStorage.getItem("story");
    const [title, storyText] = SplitTitle(
      savedStory ? savedStory : "Coś poszło nie tak"
    );
    if (storyText) {
      const spiltStory = storyText?.split("\n\n");
      setStory(spiltStory);
      setTitle(title);
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1280);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (story !== null) {
    return isMobile ? (
      <MobileView story={story} title={title} />
    ) : (
      <NormalView story={story} title={title} />
    );
  } else {
    return <h2>Wystąpił błąd, pracujemy nad tym!</h2>;
  }
}
