import { MoveRight } from 'lucide-react';

import { Breadcrumbs } from './breadcrumbs';
import { secondaryInfoItems } from '../../config/hero-data';
import { MessengersDialog } from '../messengers-dialog';

import { ButtonLink } from 'shared/ui';

export function HeroContent() {
  return (
    <section
      data-testid="hero-content"
      className="flex w-full max-w-7xl flex-col gap-6 p-4 md:p-0 lg:self-end lg:pr-4"
    >
      <Breadcrumbs />
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-foreground flex text-4xl font-bold md:text-4xl lg:text-6xl">
          Автостёкла и всё, что с ними связано.
        </h1>
        <p className="flex max-w-xl text-base/6 text-wrap md:text-base lg:text-lg">
          Замена, ремонт сколов и трещин, тонировка стекол и оптики, бронирование плёнкой. Быстро,
          аккуратно, с гарантией.
        </p>
      </div>
      <section className="flex flex-col gap-10 lg:gap-10">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex flex-row items-center gap-12 md:gap-6">
            <ButtonLink
              href="tel:+79272365108"
              variant="default"
              className="text-background h-max w-max cursor-alias rounded-full py-3 text-base hover:saturate-150 md:text-base"
            >
              Позвонить
            </ButtonLink>

            <MessengersDialog />
          </div>

          <ButtonLink variant="link" href="#services">
            Смотреть услуги
            <MoveRight />
          </ButtonLink>
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
