import Link from 'next/link';
import React from 'react';

import { navigationItems } from 'src/widgets/header/configs/nav-path';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from 'shared/ui';

function NavigationPanel() {
  return (
    <section
      data-testid="navigation-panel"
      aria-label="Навигация для Компютера"
      className="hidden xl:flex xl:self-center"
    >
      <NavigationMenu>
        <NavigationMenuList className="dark:text-foreground/80 gap-3">
          {renderNavigationList()}
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}

function renderNavigationList(onClick?: React.MouseEventHandler<HTMLAnchorElement>) {
  return navigationItems.map(({ label, id, href }) => {
    return (
      <NavigationMenuItem data-testid={id} key={id}>
        <NavigationMenuLink
          className="xl:hover:ring-foreground/20 text-nowrap hover:bg-inherit xl:hover:px-4 xl:hover:ring xl:hover:ring-offset-0 dark:hover:px-2 dark:hover:ring-0"
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

export { NavigationPanel, renderNavigationList };
