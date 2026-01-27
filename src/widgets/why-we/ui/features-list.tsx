import Image from 'next/image';

import { featureList } from '../config/feature-list';
import gelick from 'public/why-we/gelick.webp';
import maybach from 'public/why-we/maybach.webp';
import toyota from 'public/why-we/toyota.webp';

function FeaturesList() {
  return (
    <div className="ring-foreground/10 bg-card/80 dark:ring-foreground/15 flex flex-col gap-4 rounded-sm p-4 shadow-xl/20 ring lg:justify-between">
      <div className="grid aspect-video grid-cols-2 gap-2">
        <div className="relative">
          <Image src={gelick} alt="Пример работы" fill className="rounded-l-lg object-cover" />
        </div>

        <div className="grid grid-rows-2 gap-2">
          <div className="relative rounded-md">
            <Image
              src={maybach}
              alt="Пример работы"
              fill
              className="rounded-t-lg rounded-tl-none object-cover"
            />
          </div>

          <div className="relative">
            <Image
              src={toyota}
              alt="Пример работы"
              fill
              className="rounded-r-lg rounded-tr-none object-cover"
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
        className="bg-card/60 ring-foreground/10 text-foreground/90 w-max rounded-full p-2 text-sm ring backdrop-blur-lg"
      >
        {label}
      </div>
    );
  });
}

export { FeaturesList };
