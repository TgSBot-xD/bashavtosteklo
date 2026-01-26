import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { secondaryInfoItems } from 'src/widgets/hero-section/configs';
import { HeroContent } from 'src/widgets/hero-section/ui';

it('should render secondary info items', () => {
  render(<HeroContent />);

  for (const { id } of secondaryInfoItems) {
    const secondaryInfoItem = screen.getByTestId(`secondary-info-${id}`);
    expect(secondaryInfoItem).toBeInTheDocument();
  }
});
