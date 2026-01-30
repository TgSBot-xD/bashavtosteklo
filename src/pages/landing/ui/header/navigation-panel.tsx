import Link from 'next/link';
import React from 'react';

import { navigationItems } from '../../config/header-data';
import { SectionId } from '../../lib/use-active-section';

import { cn } from 'shared/lib';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from 'shared/ui';

interface NavigationPanelProps {
  readonly activeSection?: SectionId | null;
}

export function NavigationPanel({ activeSection }: NavigationPanelProps) {
  return (
    <section
      data-testid="navigation-panel"
      aria-label="Навигация для Компютера"
      className="-top-1/2xl:self-center hidden 2xl:flex"
    >
      <NavigationMenu>
        <NavigationMenuList className="dark:text-foreground/80 gap-3">
          {renderNavigationList({ activeSection })}
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}

interface RenderNavigationListOptions {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  activeSection?: SectionId | null;
}

export function renderNavigationList(options: RenderNavigationListOptions = {}) {
  const { onClick, activeSection } = options;

  return navigationItems.map(({ label, id, href }) => {
    const sectionId = href.replace('#', '') as SectionId;
    const isActive = activeSection === sectionId;

    return (
      <NavigationMenuItem data-testid={id} key={id}>
        <NavigationMenuLink
          className={cn(
            'text-nowrap hover:bg-inherit xl:hover:px-4 xl:hover:ring xl:hover:ring-offset-0 dark:hover:px-2 dark:hover:ring-0',
            isActive
              ? 'text-primary dark:text-primary font-semibold'
              : 'xl:hover:ring-foreground/20',
          )}
          onClick={onClick}
          asChild
        >
          <Link href={href} className="text-base md:text-lg lg:text-base">
            {label}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  });
}
