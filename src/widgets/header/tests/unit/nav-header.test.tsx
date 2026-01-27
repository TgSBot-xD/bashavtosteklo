import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { NavigationPanel } from 'src/widgets/header/ui/navigation-panel/navigation-panel';

import { navigationItems } from 'widget/header/configs/nav-path';

it('should render navigation links', () => {
  render(<NavigationPanel />);

  for (const { label, href, id } of navigationItems) {
    const navigationLink = screen.getByRole('link', { name: label });
    const navigationItem = screen.getByTestId(id);

    expect(navigationLink).toHaveAttribute('href', href);
    expect(navigationItem).toMatchSnapshot();
  }
});
