"use client";

import { useEffect } from "react";

export default function LoadingScreen() {
  useEffect(() => {
    // This is where you would handle any side effects
    // For example, redirecting after a timeout
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <div className="relative mb-4">
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-[url('/coffee-bean.svg')] bg-contain bg-no-repeat animate-bounce" />
          <div className="w-6 h-6 bg-[url('/coffee-bean.svg')] bg-contain bg-no-repeat animate-bounce [animation-delay:150ms]" />
          <div className="w-6 h-6 bg-[url('/coffee-bean.svg')] bg-contain bg-no-repeat animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
      <p className="text-xl font-medium">Loading</p>
    </div>
  );
}
