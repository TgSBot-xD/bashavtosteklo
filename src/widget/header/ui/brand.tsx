import { Dot } from 'lucide-react';

import { HoverCard, HoverCardContent, HoverCardTrigger } from 'shared/ui';

export function Brand() {
  return (
    <div className="flex flex-col items-center blur-none md:flex-row">
      <div>
        <span className="pr-4 text-sm md:text-lg">БАШАВТОСТЕКЛО</span>
        <HoverCard>
          <HoverCardTrigger className="hidden items-center text-sm leading-none font-medium md:flex">
            Уфа <Dot /> Черниковка
          </HoverCardTrigger>
          <HoverCardContent className="text-sm md:text-lg">
            г. Уфа, Дмитрия Донского, 50а
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
