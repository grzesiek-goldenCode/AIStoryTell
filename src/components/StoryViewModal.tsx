"use client";
import { SplitTitle } from "@/lib/functions";
import { useState, useEffect } from "react";

type StoryViewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  story: string | null;
};

export default function StoryPreviewModal({
  isOpen,
  onClose,
  story,
}: StoryViewModalProps) {
  const [visible, setVisible] = useState(false);

  // płynne pojawianie i znikanie
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;
  const [title, storyText] = SplitTitle(story ? story : "Coś poszło nie tak");

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[9999] flex items-center justify-center
      bg-gradient-to-b from-white/70 to-indigo-700/60 backdrop-blur-md
      transition-opacity duration-500 ease-out
      ${isOpen ? "opacity-100" : "opacity-0"}`}
    >
      {/* ✨ Gwiazdki w tle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* 🪄 Karta z bajką */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white/90 text-gray-800 rounded-3xl shadow-2xl max-w-2xl w-[90%] max-h-[85vh] overflow-y-auto p-6 prose prose-lg border border-pink-200/40
          transform transition-all duration-500 ease-out
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:shadow-[0_0_40px_10px_rgba(236,72,153,0.3)] before:-z-10`}
      >
        <h2 className="text-center text-2xl font-bold mb-4 text-pink-600 drop-shadow-sm">
          ✨ {title} ✨
        </h2>

        <article>{storyText}</article>
        <div className="flex items-center justify-center m-3">
          <button
            onClick={onClose}
            className="bg-amber-300 rounded-s-sm m-2 p-2 hover:bg-amber-400 hover:shadow-2xl font-cinzel"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}
