'use client';

import { useEffect, useState } from 'react';

function useScrolledDisplay(threshold: number = 10): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const isScrolledNow = window.scrollY > threshold;
      setIsScrolled((previousIsScrolled) =>
        previousIsScrolled === isScrolledNow ? previousIsScrolled : isScrolledNow,
      );
    };

    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId != null) return;

      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        updateScrollState();
      });
    };

    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId != null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [threshold]);

  return isScrolled;
}

export { useScrolledDisplay };
