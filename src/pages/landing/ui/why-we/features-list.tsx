import Image from 'next/image';

import { featureList } from '../../config/why-we-data';
import gelick from 'public/why-we/gelick.webp';
import maybach from 'public/why-we/maybach.webp';
import toyota from 'public/why-we/toyota.webp';

export function FeaturesList() {
  return (
    <div
      data-testid="features"
      className="ring-foreground/10 bg-card/80 dark:ring-foreground/15 flex flex-col gap-4 rounded-sm p-4 shadow-xl/20 ring lg:justify-between"
    >
      <div data-testid="features-list-image" className="grid aspect-video grid-cols-2 gap-2">
        <div className="relative">
          <Image
            src={gelick}
            alt="Замена лобового стекла на Mercedes-Benz G-Class"
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="rounded-l-lg object-cover"
            placeholder="blur"
          />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="relative rounded-md">
            <Image
              src={maybach}
              alt="Тонировка стёкол на Mercedes-Maybach"
              fill
              sizes="(max-width: 768px) 25vw, 17vw"
              className="rounded-t-lg rounded-tl-none object-cover"
              placeholder="blur"
            />
          </div>

          <div className="relative">
            <Image
              src={toyota}
              alt="Ремонт автостекла на Toyota"
              fill
              sizes="(max-width: 768px) 25vw, 17vw"
              className="rounded-r-lg rounded-tr-none object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-lg/6 font-bold">Фокус на качестве и предсказуемом результате</h5>
        <p className="text-foreground/70 text-sm/6">
          Комплексные работы выполняют несколько специалистов: каждый отвечает за свою часть. Подбор
          материалов — под желание и бюджет. На месте есть комфортные мелочи, чтобы вы не теряли
          время.
        </p>
        <div className="flex flex-row gap-4">{renderFeaturesItems()}</div>
      </div>
    </div>
  );
}

function renderFeaturesItems() {
  return featureList.map(({ id, label }) => {
    return (
      <div
        key={id}
        data-testid={id}
        className="bg-card ring-foreground/10 text-foreground/90 w-max rounded-full p-2 text-sm ring"
      >
        {label}
      </div>
    );
  });
}
