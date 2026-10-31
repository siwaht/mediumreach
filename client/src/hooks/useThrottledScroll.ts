import { useState, useEffect } from 'react';

interface UseThrottledScrollOptions {
  threshold?: number;
  throttleMs?: number;
}

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 * Updates at most once per `throttleMs`, always applies the final position,
 * and reads the initial position on mount (e.g. after a refresh mid-page).
 */
export function useThrottledScroll({
  threshold = 10,
  throttleMs = 100,
}: UseThrottledScrollOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > threshold
  );

  useEffect(() => {
    let lastRun = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const update = () => {
      lastRun = Date.now();
      timeoutId = null;
      setIsScrolled(window.scrollY > threshold);
    };

    const handleScroll = () => {
      const elapsed = Date.now() - lastRun;
      if (elapsed >= throttleMs) {
        update();
      } else if (timeoutId === null) {
        // Trailing call so the last scroll position is never missed.
        timeoutId = setTimeout(update, throttleMs - elapsed);
      }
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [threshold, throttleMs]);

  return isScrolled;
}
