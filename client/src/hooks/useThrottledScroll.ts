import { useState, useEffect, useRef, useCallback } from 'react';

interface UseThrottledScrollOptions {
  threshold?: number;
  throttleMs?: number;
}

export function useThrottledScroll({
  threshold = 10,
  throttleMs = 100,
}: UseThrottledScrollOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollTime = useRef(0);
  const rafId = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    const now = Date.now();
    
    if (now - lastScrollTime.current < throttleMs) {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > threshold);
      });
      return;
    }

    lastScrollTime.current = now;
    setIsScrolled(window.scrollY > threshold);
  }, [threshold, throttleMs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  return isScrolled;
}
