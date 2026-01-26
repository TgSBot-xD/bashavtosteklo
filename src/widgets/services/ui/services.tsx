import { Dot } from 'lucide-react';

import { servicesList } from '../config/services-items';

import { Divider } from 'shared/ui';

function Services() {
  return (
    <section
      data-testid="services"
      className="flex w-full flex-col gap-6 p-4 lg:mb-12 lg:max-w-4xl lg:p-0 xl:max-w-7xl"
    >
      <div className="flex w-max flex-col">
        <h4 className="text-2xl font-bold">Услуги</h4>
        <Divider />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {renderServicesList()}
      </div>
    </section>
  );
}

function renderServicesList() {
  return servicesList.map(({ id, title, label, workingHours }) => {
    return (
      <div
        key={id}
        aria-label={title}
        className="ring-foreground/10 bg-card flex flex-col rounded-xl p-4 ring"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            {/* Header секции услуг */}
            <span className="text-foreground/90 text-base font-bold lg:text-lg">{title}</span>
            <span className="ring-foreground/10 rounded-lg px-2 py-1 text-xs text-nowrap ring">
              {workingHours}
            </span>
          </div>

          <div className="flex w-full flex-col">
            {/* Центральная часть секции услуг */}
            <div className="flex flex-row items-center">
              <Dot />
              <span className="text-foreground/80 text-sm">{label[0]}</span>
            </div>
            <div className="flex flex-row items-center">
              <Dot />
              <span className="text-foreground/80 text-sm">{label[1]}</span>
            </div>
          </div>

          <div className="flex flex-row">
            {/* Нижняя часть секции услуг */}
            <span className="text-foreground/80 flex text-xs lg:text-sm">Подробнее</span>
          </div>
        </div>
      </div>
    );
  });
}

export { Services };
