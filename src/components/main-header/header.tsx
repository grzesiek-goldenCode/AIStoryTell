"use client";
import Link from "next/link";
import { useState } from "react";
import StoryViewModal from "../StoryViewModal";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const savedStory = localStorage.getItem("story");
  return (
    <div className="flex justify-start items-center">
      <Link href={"/"}>
        <h3 className="m-3 ml-5 p-2 text-xl w-max">Pracownia Opowieści</h3>
      </Link>
      {savedStory && (
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
    </div>
  );
}
