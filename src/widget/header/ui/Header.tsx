'use client';

import { useScrolledDisplay } from '../hooks/useScrolledDisplay';
import { NavigationPanel } from './navigation-panel/navigation-panel';
import { SheetNavigationPanel } from './navigation-panel/sheet-navigation-panel';
import { Trademark } from './trademark';

import { cn } from 'shared/lib';
import { Divider } from 'shared/ui';

import { ButtonLink } from 'feature/button-link';

function Header() {
  const isScrolled = useScrolledDisplay();

  return (
    <header
      data-testid="header"
      className={cn(
        `sticky top-0 z-50 flex w-full flex-col lg:max-w-7xl ${isScrolled ? 'backdrop-blur-sm' : ''} xl:m-auto`,
      )}
    >
      <div data-testid="background" className="flex w-full flex-row p-2 px-4 md:py-6 xl:py-4">
        <div className="flex w-full justify-between md:items-center xl:m-auto xl:max-w-7xl">
          <div className="flex xl:w-1/5">
            <Trademark />
          </div>
          <div className="flex self-center xl:w-1/3">
            <NavigationPanel />
          </div>
          <div
            data-testid="company-contact"
            className="lg:w1/3 flex items-center gap-8 xl:w-1/4 xl:justify-end xl:gap-2"
          >
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
      </div>
      <Divider className={cn(`${isScrolled ? 'flex' : 'hidden'}`)} />
    </header>
  );
}

export { Header };
