import { renderServicesList } from './services-items';

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

export { Services };
