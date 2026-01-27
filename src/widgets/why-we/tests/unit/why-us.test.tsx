import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { whyUsList } from 'widget/why-we/config/why-us-list';
import { WhyUsList } from 'widget/why-we/ui/why-us';

it('should render feature', () => {
  render(<WhyUsList />);

  for (const { id, title, description } of whyUsList) {
    const whyUsTitle = screen.getByText(title);
    const whyUsDescription = screen.getByText(description);
    const whyUsItem = screen.getByTestId(id);

    expect(whyUsTitle).toBeInTheDocument();
    expect(whyUsDescription).toBeInTheDocument();
    expect(whyUsItem).toMatchSnapshot();
  }
});
