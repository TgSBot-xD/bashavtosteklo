import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { navigationItems } from 'src/widgets/header/configs/nav-path';
import { NavigationPanel } from 'src/widgets/header/ui/navigation-panel/navigation-panel';

it('should render navigation links', () => {
  render(<NavigationPanel />);

  for (const { label, href } of navigationItems) {
    const navigationLink = screen.getByRole('link', { name: label });
    expect(navigationLink).toHaveAttribute('href', href);
  }
});
