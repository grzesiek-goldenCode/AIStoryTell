"use client";
import { sampleStory } from "@/lib/devHelper";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import MobileView from "@/components/MobileView";
import NormalView from "@/components/NormalView";

export default function StoryView() {
  const [story, setStory] = useState<string[] | null>([
    "Pracujemy nad Twoją bajką...",
  ]);

  useEffect(() => {
    const savedStory = localStorage.getItem("story");
    if (savedStory) {
      const spiltStory = savedStory?.split("\n\n");
      setStory(spiltStory);
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
      <MobileView story={story} />
    ) : (
      <NormalView story={story} />
    );
  } else {
    return <h2>Wystąpił błąd, pracujemy nad tym!</h2>;
  }
}
