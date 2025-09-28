"use client";
import { sampleStory } from "@/lib/devHelper";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import MobileView from "@/components/MobileView";
import NormalView from "@/components/NormalView";

export default function StoryView() {
  const story = sampleStory.split("\n\n");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1280);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile ? <MobileView story={story} /> : <NormalView story={story} />;
}
