'use client';

import { useEffect, useState } from 'react';

const SECTION_IDS = ['services', 'why', 'examples', 'reviews', 'contacts'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(): SectionId | null {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<SectionId, number>();

    for (const id of SECTION_IDS) {
      const element = document.querySelector(`#${id}`);
      if (!element) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }
          }

          // Выбираем секцию с наибольшим intersectionRatio
          let maxRatio = 0;
          let mostVisibleSection: SectionId | null = null;

          for (const [sectionId, ratio] of visibleSections) {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              mostVisibleSection = sectionId;
            }
          }

          setActiveSection(mostVisibleSection);
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-20% 0px -20% 0px',
        },
      );

      observer.observe(element);
      observers.push(observer);
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, []);

  return activeSection;
}
