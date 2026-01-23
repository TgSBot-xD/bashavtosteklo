import { Menu, X } from 'lucide-react';

import { renderNavigationList } from './navigation-panel';

import {
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
import { ButtonLink } from 'shared/ui/button-link';

function SheetNavigationPanel({
  sideOfSidebar,
}: {
  sideOfSidebar: 'right' | 'bottom' | 'left' | 'top';
}) {
  return (
    <div className="flex items-center xl:hidden">
      <Sheet>
        <SheetTrigger className="border-foreground/20 h-max rounded-sm border p-3">
          <Menu className="h-auto w-5" />
        </SheetTrigger>
        <SheetContent showCloseButton={false} side={sideOfSidebar} className="flex">
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
                {renderNavigationList()}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Отвечает за контакты компании на панели Меню */}
            <div className="flex w-full flex-col gap-4">
              <ButtonLink
                href="#form"
                className="text-accent dark:bg-primary/80 dark:text-background w-full p-6 md:hidden"
              >
                Онлайн-запись
              </ButtonLink>
              <ButtonLink
                href="tel:+79272365108"
                variant="ghost"
                className="bg-background ring-foreground/10 dark:ring-foreground/20 md:text-md dark:bg-secondary/40 dark:text-foreground/90 font-bold ring md:py-4 lg:hidden dark:ring-offset-0"
              >
                Позвонить
              </ButtonLink>
              <ButtonLink
                variant="ghost"
                href="tel:+79272365108"
                className="bg-background ring-foreground/10 dark:ring-foreground/20 md:text-md dark:bg-secondary/40 dark:text-foreground/90 font-bold ring md:py-4 dark:ring-offset-0"
              >
                Мессенджеры
              </ButtonLink>
            </div>

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
