import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

import { renderNavigationList } from './navigation-panel';
import { MessengersButton } from '../messengers-dialog';

import {
  ButtonLink,
  NavigationMenu,
  NavigationMenuList,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'shared/ui';

export function SheetNavigationPanel({
  sideOfSidebar,
}: {
  readonly sideOfSidebar: 'right' | 'bottom' | 'left' | 'top';
}) {
  const [sheetPanel, setSheetPanel] = useState(false);

  const closeSheet = () => {
    setSheetPanel(false);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    closeSheet();
    event.preventDefault();
  };

  return (
    <div className="flex items-center 2xl:hidden">
      <Sheet open={sheetPanel} onOpenChange={setSheetPanel}>
        <SheetTrigger
          data-testid="header-sheet-mobile-trigger"
          className="border-foreground/20 h-max rounded-sm border p-3"
        >
          <Menu className="h-auto w-5" />
        </SheetTrigger>
        <SheetContent
          data-testid="header-sheet-mobile-content"
          showCloseButton={false}
          side={sideOfSidebar}
          className="flex"
        >
          <SheetHeader>
            <SheetTitle asChild>
              <div>
                <h4>БАШАВТОСТЕКЛО</h4>
                <p>Меню</p>
              </div>
            </SheetTitle>
          </SheetHeader>
          <SheetFooter className="flex items-center gap-10 md:gap-10">
            {/* Отвечает за навигацию на панели Меню */}
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-2 md:gap-4">
                {renderNavigationList(handleNavClick)}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Отвечает за контакты компании на панели Меню */}
            <div className="flex w-full flex-col gap-4">
              <ButtonLink
                variant="default"
                href="#form"
                className="w-full p-6 md:hidden"
                onClick={closeSheet}
              >
                Онлайн-запись
              </ButtonLink>
              <ButtonLink
                variant="secondary"
                href="tel:+79272365108"
                className="dark:bg-secondary/40 dark:text-foreground/90 lg:hidden"
                onClick={closeSheet}
              >
                Позвонить
              </ButtonLink>
              <MessengersButton
                variant="secondary"
                className="dark:bg-secondary/40 dark:text-foreground/90"
                onDialogOpenChange={(open) => !open && closeSheet()}
              >
                Мессенджеры
              </MessengersButton>
            </div>

            {/* Отвечает за кнопку закрытия на панели */}
            <SheetClose
              data-testid="header-sheet-mobile-close-button"
              asChild
              className="flex self-end"
            >
              <X />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
