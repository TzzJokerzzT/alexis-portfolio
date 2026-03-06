import { useState, useEffect, useCallback } from "react";
import { Quotes } from "@/features/home/utils/constants/Quotes";

const INTERVAL_MS = 10000; // 10 seconds

function getRandomIndex(length: number, excludeIndex?: number): number {
  if (length <= 1) return 0;

  let newIndex: number;
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (newIndex === excludeIndex);

  return newIndex;
}

export function useRandomQuote(intervalMs: number = INTERVAL_MS) {
  const [currentIndex, setCurrentIndex] = useState(() => getRandomIndex(Quotes.length));

  const selectRandomQuote = useCallback(() => {
    setCurrentIndex((prev) => getRandomIndex(Quotes.length, prev));
  }, []);

  useEffect(() => {
    const interval = setInterval(selectRandomQuote, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs, selectRandomQuote]);

  return {
    quote: Quotes[currentIndex],
    currentIndex,
    selectRandomQuote,
  };
}
