'use client';

import { useEffect, useState } from 'react';

import { Brand } from './brand';
import { ContactInfo } from './contact-info';
import { DesktopNavigation, MobileNavigation } from './nav-header';

import { cn } from 'shared/lib';

function Header() {
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

  return (
    <header data-testid="header" className="sticky top-0 z-50 w-full">
      <div
        data-testid="background"
        className={cn(
          'border-b backdrop-blur-sm',
          isScrolled ? 'border-white/30' : 'border-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Brand />
          <div className="hidden lg:flex">
            <DesktopNavigation />
          </div>
          <div className="flex items-center gap-2">
            {/* NOTE: Умышленно сделан разрыв */}
            <div className="hidden xl:flex">
              <ContactInfo />
            </div>
            <div className="xl:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
