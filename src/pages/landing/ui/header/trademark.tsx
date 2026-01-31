import { Dot } from 'lucide-react';
import Link from 'next/link';

import { HoverCard, HoverCardContent, HoverCardTrigger } from 'shared/ui';

export function Trademark() {
  return (
    <section
      data-testid="trademark"
      aria-label="Наименование компании"
      className="xl:items-items-center flex flex-col gap-1 md:flex-row md:items-center md:gap-6 xl:gap-8"
    >
      <span className="text-foreground text-sm font-semibold tracking-wider md:text-base">
        БАШАВТОСТЕКЛО
      </span>
      <HoverCard>
        <HoverCardTrigger
          data-testid="header-hover-trigger"
          className="text-accent-foreground/80 dark:text-accent-foreground/70 flex cursor-crosshair flex-row items-center text-xs font-normal md:text-sm xl:text-xs"
        >
          <span>Уфа</span>
          <Dot className="size-4 shrink-0" />
          <span>Черниковка</span>
        </HoverCardTrigger>
        <HoverCardContent data-testid="header-hover-content" className="bg-background">
          <Link
            href="https://yandex.ru/maps/?pt=56.101349259825504,54.8229753078355&z=16&l=map"
            target="_blank"
            rel="noopener noreferrer"
          >
            ул. Дмитрия Донского, 50а
          </Link>
        </HoverCardContent>
      </HoverCard>
    </section>
  );
}
