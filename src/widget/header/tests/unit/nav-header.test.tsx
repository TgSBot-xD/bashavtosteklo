import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { navigationItems } from 'widget/header/config';
import { DesktopNavigation } from 'widget/header/ui';

it('should render navigation links', () => {
  render(<DesktopNavigation />);

  for (const { label, href } of navigationItems) {
    const navigationLink = screen.getByRole('link', { name: label });
    expect(navigationLink).toHaveAttribute('href', href);
  }
});
