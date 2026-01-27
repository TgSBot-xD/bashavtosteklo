import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { HeroContent } from 'src/widgets/hero-section/ui';

import { secondaryInfoItems } from 'widget/hero-section/configs';

it('should render secondary info items', () => {
  render(<HeroContent />);

  for (const { id } of secondaryInfoItems) {
    const secondaryInfoItem = screen.getByTestId(`secondary-info-${id}`);

    expect(secondaryInfoItem).toBeInTheDocument();
    expect(secondaryInfoItem).toMatchSnapshot();
  }
});
