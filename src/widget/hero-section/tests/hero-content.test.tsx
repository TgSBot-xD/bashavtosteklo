import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { listSecondaryInfo } from '../config/heroContentBreadcrumbs';
import { HeroContent } from '../ui/hero-content';

it('should breadcrumbs on hero content', () => {
  render(<HeroContent />);

  for (const { label } of listSecondaryInfo) {
    const getHeroBunusContent = screen.getByTestId(label);
    expect(getHeroBunusContent).toBeInTheDocument();
  }
});
