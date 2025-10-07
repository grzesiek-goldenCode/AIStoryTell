"use client";

import Lottie from "lottie-react";
import magicBook from "../../public/Magic.json";

export default function MagicLoaderLottie() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <Lottie
        animationData={magicBook}
        loop={true}
        className="w-60 h-60 mb-6"
      />
      <p className="text-xl text-gray-700 dark:text-gray-200 font-fairy animate-pulse">
        Tkanie bajki w toku...
      </p>
    </div>
  );
}
