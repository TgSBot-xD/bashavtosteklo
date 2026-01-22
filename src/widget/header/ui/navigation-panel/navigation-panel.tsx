import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from 'shared/ui';

import { navigationItems } from 'widget/header/config/nav-path';

function NavigationPanel() {
  return (
    <section data-testid="navigation-panel" aria-label="Навигация для Компютера">
      <NavigationMenu>
        <NavigationMenuList>{renderNavigationList()}</NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}

function renderNavigationList() {
  return navigationItems.map(({ label, id, href }) => {
    return (
      <NavigationMenuItem key={id}>
        <NavigationMenuLink asChild>
          <Link href={href}>{label}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  });
}

export { NavigationPanel, renderNavigationList };
