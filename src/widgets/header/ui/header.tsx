'use client';

import { useEffect, useState } from 'react';

import { NavigationPanel } from './navigation-panel/navigation-panel';
import { SheetNavigationPanel } from './navigation-panel/sheet-navigation-panel';
import { Trademark } from './trademark';

import { cn } from 'shared/lib';
import { ButtonLink, Divider } from 'shared/ui';

function Header() {
  const isScrolled = useScrolledDisplay();

  return (
    <header
      data-testid="header"
      className={cn(
        `sticky top-0 z-50 flex w-full max-w-full flex-col ${isScrolled ? 'backdrop-blur-sm' : ''} `,
      )}
    >
      <div
        data-testid="background"
        className="flex w-full flex-row p-2 px-4 md:py-6 md:pb-4 lg:px-0 xl:m-auto xl:py-4"
      >
        <div className="m-auto flex w-full justify-between md:items-center lg:max-w-4xl xl:max-w-7xl">
          <div className="flex xl:w-1/5">
            <Trademark />
          </div>
          <div className="flex self-center xl:w-1/3">
            <NavigationPanel />
          </div>
          <div
            data-testid="company-contact"
            className="flex items-center gap-8 xl:w-1/4 xl:justify-end xl:gap-2"
          >
            <ButtonLink
              variant="link"
              href="tel:+79272365108"
              className="dark:text-foreground/80 text-foreground/80 hover:ring-foreground/20 hidden hover:no-underline hover:ring lg:flex xl:text-base dark:hover:ring-0"
            >
              +7 (927) 236 51 08
            </ButtonLink>
            <ButtonLink href="#form" className="hidden md:flex lg:p-5 xl:text-base">
              Онлайн-запись
            </ButtonLink>
            <SheetNavigationPanel sideOfSidebar="right" />
          </div>
        </div>
      </div>
      <Divider className={cn(`${isScrolled ? 'flex' : 'hidden'}`)} />
    </header>
  );
}

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

export { Header };
