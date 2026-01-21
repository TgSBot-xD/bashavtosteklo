import { Dot } from 'lucide-react';

import { HoverCard, HoverCardContent, HoverCardTrigger } from 'shared/ui';

function Brand() {
  return (
    <div className="flex flex-col items-center blur-none md:flex-row">
      <div>
        <span data-testid="brand-title" className="pr-4 text-sm md:text-2xl">
          БАШАВТОСТЕКЛО
        </span>
        <HoverCard>
          <HoverCardTrigger
            data-testid="hover-triger"
            className="hidden items-center text-sm leading-none font-medium md:flex md:text-lg"
          >
            Уфа <Dot /> Черниковка
          </HoverCardTrigger>
          <HoverCardContent data-testid="hover-content" className="text-sm md:text-lg">
            г. Уфа, Дмитрия Донского, 50а
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}

export { Brand };
