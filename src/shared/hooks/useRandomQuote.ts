import { useState, useEffect, useCallback } from "react";
import type { QuoteListResponse } from "../api/types";

const INTERVAL_MS = 10000; // 10 seconds

function getRandomIndex(length: number, excludeIndex?: number): number {
  if (length <= 1) return 0;

  let newIndex: number;
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (newIndex === excludeIndex);

  return newIndex;
}

export function useRandomQuote(
  intervalMs: number = INTERVAL_MS,
  quotes: QuoteListResponse[],
) {
  const [currentIndex, setCurrentIndex] = useState(() =>
    getRandomIndex(quotes.length),
  );

  const selectRandomQuote = useCallback(() => {
    setCurrentIndex((prev) => getRandomIndex(quotes.length, prev));
  }, [quotes.length]);

  useEffect(() => {
    const interval = setInterval(selectRandomQuote, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs, selectRandomQuote]);

  return {
    quote: quotes[currentIndex],
    currentIndex,
    selectRandomQuote,
  };
}
