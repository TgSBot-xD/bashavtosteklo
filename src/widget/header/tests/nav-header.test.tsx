import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { navigationList } from '../config/nav-path';
import { DesktopNavigation } from '../ui/nav-header';

it('should navigation list', () => {
  render(<DesktopNavigation />);

  for (const { label, href } of navigationList) {
    const link = screen.getByRole('link', { name: label });
    expect(link).toHaveAttribute('href', href);
  }
});
