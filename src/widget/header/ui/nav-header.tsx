import { Menu } from 'lucide-react';
import Link from 'next/link';

import { type NavigationItems } from '../model';

import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from 'shared/ui';

const navigationList: NavigationItems[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Почему мы', href: '#why' },
  { label: 'Примеры', href: '#examples' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
] as const;

export function DesktopNavigation() {
  return <nav className="flex items-center">{ComposeNavigation()}</nav>;
}
// TODO: [BAS-5] Сделать active при пересечении точки на сайте
export function MobileNavigation() {
  return (
    <nav className="flex max-w-full">
      <Sheet>
        <SheetTrigger
          aria-describedby="Навигация по сайтцу"
          className="flex p-2 hover:rounded-full hover:ring hover:ring-white/5 hover:ring-offset-1"
        >
          <Menu />
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetTitle className="items-center justify-center"></SheetTitle>
          <SheetHeader className="md:gap-8">{ComposeNavigation()}</SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

// TODO: [BAS-10] Переделать функцию в компонент
function ComposeNavigation() {
  return navigationList.map(({ label, href }) => {
    return (
      <Button
        key={href}
        variant="link"
        className="max-w-full hover:px-6 sm:text-xl md:text-xl"
        asChild
      >
        <Link aria-describedby={label} href={href}>
          {label}
        </Link>
      </Button>
    );
  });
}
