import { useEffect, useState } from 'react';

function useScrolledDisplay() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      // Порог 3px нужен, что бы не вешать стили раньше времени
      const isScrolledNow = window.scrollY > 3;
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
      if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return isScrolled;
}

export { useScrolledDisplay };
