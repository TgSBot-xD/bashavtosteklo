'use client';

import { useScrolledDisplay } from '../hooks/useScrolledDisplay';
import { NavigationPanel } from './navigation-panel/navigation-panel';
import { SheetNavigationPanel } from './navigation-panel/sheet-navigation-panel';
import { Trademark } from './trademark';

import { cn } from 'shared/lib';
import { ButtonLink } from 'shared/ui/button-link';

function Header() {
  const isScrolled = useScrolledDisplay();

  return (
    <header data-testid="header" className="flex w-full xl:m-auto">
      <div
        className={cn(
          `flex w-full flex-row justify-around p-2 px-4 md:items-center md:px-12 md:py-8 ${isScrolled ? 'border-foreground/30 border-b backdrop-blur-md' : ''}`,
        )}
      >
        <Trademark />
        <NavigationPanel />
        <div data-testid="company-contact" className="flex items-center gap-8 xl:gap-2">
          <ButtonLink
            variant="link"
            href="tel:+79272365108"
            className="dark:text-foreground/80 hover:ring-foreground/20 dark:hover:text-foreground hidden hover:no-underline hover:ring lg:flex xl:text-base dark:bg-inherit dark:hover:ring-0"
          >
            +7 (927) 236 51 08
          </ButtonLink>
          <ButtonLink href="#form" className="hidden md:flex lg:p-5 xl:text-base">
            Онлайн-запись
          </ButtonLink>
          <SheetNavigationPanel sideOfSidebar="right" />
        </div>
      </div>
    </header>
  );
}

export { Header };
