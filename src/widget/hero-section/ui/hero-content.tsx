import { MoveRight } from 'lucide-react';

import { BreadCrumbs } from './breadcrumbs';
import { type HeroInfoItems } from '../models';

import { Button } from 'shared/ui';

const listSecondaryInfo: HeroInfoItems[] = [
  {
    index: 1,
    label: 'ул. Дмитрия Донского, 50а',
  },
  {
    index: 2,
    label: 'Пн-ВС: 10:00-20:00',
  },
  {
    index: 3,
    label: 'Гарантия на работы',
  },
] as const;

export function HeroContent() {
  return (
    <section className="flex w-full max-w-6xl flex-col gap-6 px-4">
      <BreadCrumbs />
      <div className="flex flex-col justify-center gap-6">
        <h1 className="flex text-4xl text-white md:text-6xl">
          Автостёкла и всё, что с ними связано.
        </h1>
        <h3 className="flex max-w-xl text-lg/7 text-wrap md:text-xl">
          Замена, ремонт сколов и трещин, тонировка стекол и оптики, бронирование плёнкой. Быстро,
          аккуратно, с гарантией.
        </h3>
      </div>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex flex-row items-center gap-12 md:gap-6">
            <Button
              variant="default"
              className="text-background text-md h-max w-max rounded-full py-3 hover:saturate-120 md:text-xl"
            >
              Позвонить
            </Button>
            <Button
              variant="link"
              className="py-6 ring ring-white/20 hover:ring-white/25 md:text-xl"
            >
              Мессенджеры
            </Button>
          </div>
          <Button
            variant="link"
            className="text-accent-foreground hover:text-accent-foreground hover:bg-accent/0 hover:ring-0 md:text-lg"
          >
            Смотреть услуги
            <MoveRight />
          </Button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">{CompostSecondaryInfo()}</div>
      </section>
    </section>
  );
}

function CompostSecondaryInfo() {
  return listSecondaryInfo.map(({ index, label }) => {
    return (
      <span
        className="flex w-full items-center justify-center rounded-full border border-gray-500/40 bg-gray-500/20 p-2 text-sm md:w-max md:text-lg"
        key={index}
      >
        {label}
      </span>
    );
  });
}
