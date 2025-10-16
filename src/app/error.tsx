"use client";
import Button from "@/components/Button";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Ups! Coś poszło nie tak 😔</h1>
      <p className="mb-6 text-gray-500">
        Spróbuj ponownie — może magia zadziała następnym razem ✨
      </p>
      <Button onClick={() => reset()}>Spróbuj ponownie</Button>
    </div>
  );
}
