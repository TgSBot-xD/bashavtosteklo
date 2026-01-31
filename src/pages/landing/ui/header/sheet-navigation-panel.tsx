import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { renderNavigationList } from './navigation-panel';
import { SectionId } from '../../lib/use-active-section';

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
import { MessengersDialog } from '../messengers-dialog';

interface SheetNavigationPanelProps {
  readonly sideOfSidebar: 'right' | 'bottom' | 'left' | 'top';
  readonly activeSection?: SectionId | null;
}

export function SheetNavigationPanel({ sideOfSidebar, activeSection }: SheetNavigationPanelProps) {
  const [sheetPanel, setSheetPanel] = useState(false);

  const closeSheet = () => {
    setSheetPanel(false);
  };

  const handleNavClick = () => {
    closeSheet();
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
              <h4>БАШАВТОСТЕКЛО</h4>
            </SheetTitle>
          </SheetHeader>
          <SheetFooter className="flex items-center gap-10 md:gap-10">
            {/* Отвечает за навигацию на панели Меню */}
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-2 md:gap-4">
                {renderNavigationList({ onClick: handleNavClick, activeSection })}
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
              <MessengersDialog />
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
