import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { secondaryInfoItems } from 'widget/hero-section/config';
import { HeroContent } from 'widget/hero-section/ui';

it('should breadcrumbs on hero content', () => {
  render(<HeroContent />);

  for (const { label } of secondaryInfoItems) {
    const getHeroBunusContent = screen.getByTestId(label);
    expect(getHeroBunusContent).toBeInTheDocument();
  }
});
