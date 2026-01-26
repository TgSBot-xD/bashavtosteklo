import { Menu, X } from 'lucide-react';
import React, { Fragment, useState } from 'react';

import { renderNavigationList } from './navigation-panel';
import { contactItems } from 'src/widgets/header/configs/contact-company';

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

function SheetNavigationPanel({
  sideOfSidebar,
}: {
  sideOfSidebar: 'right' | 'bottom' | 'left' | 'top';
}) {
  const [getSheetPanel, setSheetPanel] = useState(false);

  const setStatusSheetPanel = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (getSheetPanel) {
      setSheetPanel(false);
      event.preventDefault();
    } else {
      setSheetPanel(true);
      event.preventDefault();
    }
  };

  const renderContactCompany = () => {
    return contactItems.map(({ children, href, className, variant, id }) => {
      return (
        <Fragment key={id}>
          <ButtonLink
            variant={variant}
            href={href}
            className={className}
            type="button"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => setStatusSheetPanel(event)}
          >
            {children}
          </ButtonLink>
        </Fragment>
      );
    });
  };

  return (
    <div className="flex items-center xl:hidden">
      <Sheet open={getSheetPanel} onOpenChange={setSheetPanel}>
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
          <SheetFooter data-state="close" className="flex items-center gap-10 md:gap-10">
            {/* Отвечает за навигацию на панели Меню */}
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-2 md:gap-4">
                {renderNavigationList(setStatusSheetPanel)}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Отвечает за контакты компании на панели Меню */}
            <div className="flex w-full flex-col gap-4">{renderContactCompany()}</div>

            {/* Отвечает за кнопку закрытия на панели */}
            <SheetClose asChild className="flex self-end">
              <X />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export { SheetNavigationPanel };
