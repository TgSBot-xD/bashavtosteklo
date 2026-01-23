import { Dot } from 'lucide-react';

import { HoverCard, HoverCardContent, HoverCardTrigger } from 'shared/ui';

function Trademark() {
  return (
    <section
      data-testid="trademark"
      aria-label="Наименование компании"
      className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6 xl:flex-col xl:items-start xl:gap-1"
    >
      <h2 className="text-foreground text-sm font-semibold tracking-wider md:text-base">
        БАШАВТОСТЕКЛО
      </h2>
      <HoverCard>
        <HoverCardTrigger className="text-accent-foreground/80 dark:text-accent-foreground/70 flex flex-row items-center text-xs font-normal md:text-sm">
          Уфа <Dot /> Черниковка
        </HoverCardTrigger>
        <HoverCardContent className="">ул. Дмитрия Донского, 50а</HoverCardContent>
      </HoverCard>
    </section>
  );
}

export { Trademark };
