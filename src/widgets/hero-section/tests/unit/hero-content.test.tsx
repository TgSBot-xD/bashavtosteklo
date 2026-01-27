import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { secondaryInfoItems } from 'widget/hero-section/configs';
import { HeroContent } from 'widget/hero-section/ui/hero-content/hero-content';

it('should render secondary info items', () => {
  render(<HeroContent />);

  for (const { id } of secondaryInfoItems) {
    const secondaryInfoItem = screen.getByTestId(`secondary-info-${id}`);

    expect(secondaryInfoItem).toBeInTheDocument();
    expect(secondaryInfoItem).toMatchSnapshot();
  }
});
