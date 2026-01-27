import { Check } from 'lucide-react';

import { whyUsList } from '../config/why-us-list';

function WhyUsList() {
  return (
    <div>
      <div>{renderWhyUsItems()}</div>
    </div>
  );
}

function renderWhyUsItems() {
  return whyUsList.map(({ id, title, description }) => {
    return (
      <div data-testid={id} key={id}>
        <Check />
        <div>
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      </div>
    );
  });
}

export { WhyUsList };
