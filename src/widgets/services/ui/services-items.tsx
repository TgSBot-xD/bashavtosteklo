import { Dot } from 'lucide-react';

import { servicesList } from '../config/services-items';

function renderServicesList() {
  return servicesList.map(({ id, title, label, workingHours }) => {
    return (
      <div
        key={id}
        aria-label={title}
        className="bg-card hover:ring-ring/40 dark:ring-foreground/20 ring-foreground/10 dark:hover:ring-primary/40 flex flex-col rounded-xl p-4 ring transition-all"
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

export { renderServicesList };
