"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { StoryProps } from "@/types";
import StoryViewModal from "./StoryViewModal";

export default function NormalView({ story, title }: StoryProps) {
  const [index, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const savedStory = localStorage.getItem("story");

  function prev() {
    if (index > 0) {
      setActiveIndex(index - 1);
    }
  }

  function next() {
    if (index < story.length - 1) {
      setActiveIndex(index + 1);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="mt-10 text-4xl font-bold">{title}</h2>
      <div className="w-full mx-100 flex justify-evenly items-center h-[70vh]">
        <div
          className={`glass-card ${
            index === 0 ? "pointer-events-none invisible" : ""
          }`}
          onClick={prev}
        >
          <button disabled={index === 0} className="disabled:invisible">
            Poprzednia Strona
          </button>
        </div>
        <AnimatePresence mode="wait">
          <article
            className={`prose prose-xl w-[50vw] mx-auto whitespace-pre-line text-center font-amaticSC text-6xl transition duration-300 ease-in-out  ${
              index === story.length - 1 ? "font-bold " : ""
            }`}
          >
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              {story[index]}
            </motion.div>
          </article>
        </AnimatePresence>
        <div
          className={`glass-card ${
            index === story.length - 1 ? "pointer-events-none" : ""
          }`}
          onClick={next}
        >
          <button
            disabled={index === story.length - 1}
            className="disabled:invisible"
          >
            Następna Strona
          </button>
        </div>
      </div>
      <p>
        {index + 1} / {story.length}
      </p>
      {story && (
        <button
          onClick={() => setIsOpen(true)}
          className="text-pink-600 hover:text-pink-700 font-medium transition"
        >
          Podgląd bajki
        </button>
      )}
      <StoryViewModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        story={savedStory}
      />
      {index === story.length - 1 && (
        <Button>
          <a href="/story">Nowa Bajka</a>
        </Button>
      )}
    </div>
  );
}
