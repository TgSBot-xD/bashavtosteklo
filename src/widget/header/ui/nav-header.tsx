import { Menu } from 'lucide-react';
import Link from 'next/link';

import { navigationItems } from '../config/nav-path';

import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from 'shared/ui';

function DesktopNavigation() {
  return (
    <nav data-testid="nav-descktop" aria-label="Навигация" className="flex items-center">
      <ul className="flex items-center">
        <NavigationLinks />
      </ul>
    </nav>
  );
}
// TODO: [BAS-5] Сделать active при пересечении точки на сайте
function MobileNavigation() {
  return (
    <nav className="flex max-w-full">
      <Sheet>
        <SheetTrigger
          data-testid="nav-mobile-triger"
          aria-label="Открыть меню навигации"
          className="flex p-2 hover:rounded-full hover:ring hover:ring-white/5 hover:ring-offset-1"
        >
          <Menu />
        </SheetTrigger>
        <SheetContent data-testid="nav-mobile-menu" side="bottom">
          <SheetTitle className="text-center">Навигация</SheetTitle>
          <SheetHeader className="md:gap-8">
            <ul className="flex flex-col items-center gap-2">
              <NavigationLinks />
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

function NavigationLinks() {
  return navigationItems.map(({ label, href }) => {
    return (
      <li key={href} className="max-w-full">
        <Button variant="link" className="max-w-full hover:px-6 sm:text-xl md:text-xl" asChild>
          <Link href={href}>{label}</Link>
        </Button>
      </li>
    );
  });
}

export { DesktopNavigation, MobileNavigation };
