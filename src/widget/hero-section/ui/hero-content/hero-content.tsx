import { MoveRight } from 'lucide-react';

import { Breadcrumbs } from './breadcrumbs';
import { secondaryInfoItems } from '../../config';

import { Button } from 'shared/ui';

function HeroContent() {
  return (
    <section className="flex w-full max-w-7xl flex-col gap-6 p-4 md:p-0 lg:self-end lg:pr-4">
      <Breadcrumbs />
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-foreground flex text-4xl font-bold md:text-4xl lg:text-6xl">
          Автостёкла и всё, что с ними связано.
        </h1>
        <h3 className="flex max-w-xl text-base/6 text-wrap md:text-base lg:text-lg">
          Замена, ремонт сколов и трещин, тонировка стекол и оптики, бронирование плёнкой. Быстро,
          аккуратно, с гарантией.
        </h3>
      </div>
      <section className="flex flex-col gap-10 lg:gap-10">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex flex-row items-center gap-12 md:gap-6">
            <Button
              variant="default"
              className="text-background text-md h-max w-max cursor-alias rounded-full py-3 hover:saturate-150 md:text-base"
            >
              Позвонить
            </Button>
            <Button
              variant="link"
              className="text-foreground/80 ring-foreground/40 dark:text-foreground/90 dark:ring-foreground/50 hover:dark:ring-foreground/60 hover:dark:text-foreground cursor-alias py-6 ring md:text-base"
            >
              Мессенджеры
            </Button>
          </div>
          <Button
            variant="link"
            className="text-accent-foreground/80 hover:text-accent-foreground hover:bg-accent/0 hover:dark:text-accent-foreground cursor-pointer hover:ring-0 md:text-base"
          >
            Смотреть услуги
            <MoveRight />
          </Button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">{renderSecondaryInfoItems()}</div>
      </section>
    </section>
  );
}

function renderSecondaryInfoItems() {
  return secondaryInfoItems.map(({ id, label }) => {
    return (
      <span
        className="flex w-full items-center justify-center rounded-full border border-gray-500/40 bg-gray-500/20 p-2 text-sm md:w-max md:text-base"
        key={id}
        data-testid={`secondary-info-${id}`}
      >
        {label}
      </span>
    );
  });
}

export { HeroContent };
