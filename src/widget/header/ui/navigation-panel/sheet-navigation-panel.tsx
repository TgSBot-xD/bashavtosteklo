import { Menu, X } from 'lucide-react';

import { renderNavigationList } from './navigation-panel';

import {
  NavigationMenu,
  NavigationMenuList,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'shared/ui';

function SheetNavigationPanel({
  sideOfSidebar,
}: {
  sideOfSidebar: 'right' | 'bottom' | 'left' | 'top';
}) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={sideOfSidebar} className="flex">
        <SheetHeader>
          <SheetTitle>Навигация</SheetTitle>
        </SheetHeader>
        <SheetFooter className="flex w-full items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col">
              {renderNavigationList()}
            </NavigationMenuList>
          </NavigationMenu>
          <SheetClose asChild className="flex self-end">
            <X />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export { SheetNavigationPanel };
