import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { navigationItems } from 'widget/header/configs/nav-path';
import { NavigationPanel } from 'widget/header/ui/navigation-panel/navigation-panel';

it('should render navigation links', () => {
  render(<NavigationPanel />);

  for (const { label, href } of navigationItems) {
    const navigationLink = screen.getByRole('link', { name: label });
    expect(navigationLink).toHaveAttribute('href', href);
  }
});
