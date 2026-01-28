import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { navigationItems } from 'pages/landing/config/header-data';
import { NavigationPanel } from 'pages/landing/ui/header/navigation-panel';

it('should render navigation links', () => {
  render(<NavigationPanel />);

  for (const { label, href } of navigationItems) {
    const navigationLink = screen.getByRole('link', { name: label });

    expect(navigationLink).toHaveAttribute('href', href);
  }
});
