import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { secondaryInfoItems } from 'widget/hero-section/config';
import { HeroContent } from 'widget/hero-section/ui';

it('should render secondary info items', () => {
  render(<HeroContent />);

  for (const { id } of secondaryInfoItems) {
    const secondaryInfoItem = screen.getByTestId(`secondary-info-${id}`);
    expect(secondaryInfoItem).toBeInTheDocument();
  }
});
