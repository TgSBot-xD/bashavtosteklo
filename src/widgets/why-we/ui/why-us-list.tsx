import { Check } from 'lucide-react';

import { whyUsList } from '../config/why-us-list';

function WhyUsList() {
  return (
    <div className="bg-card/80 ring-foreground/10 dark:ring-foreground/15 flex rounded-lg p-6 shadow-xl/20 ring">
      <div className="flex flex-col gap-8 lg:justify-between lg:gap-0">{renderWhyUsItems()}</div>
    </div>
  );
}

function renderWhyUsItems() {
  return whyUsList.map(({ id, title, description }) => {
    return (
      <div data-testid={id} key={id} className="flex flex-row items-start gap-2">
        <Check className="text-primary/80 w-7 self-start" />
        <div className="flex flex-col">
          <h6 className="text-sm font-bold">{title}</h6>
          <p className="text-foreground/80 text-sm">{description}</p>
        </div>
      </div>
    );
  });
}

export { WhyUsList };
