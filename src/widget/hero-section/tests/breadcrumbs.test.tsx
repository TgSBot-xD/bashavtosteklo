import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { breadcrumbsData } from '../config/breadcrumbsList';
import { BreadCrumbs } from '../ui/breadcrumbs';

it('should', () => {
  render(<BreadCrumbs />);

  for (const { label, href } of breadcrumbsData) {
    const getLinkBreadcrumb = screen.getByRole('link', { name: label });
    expect(getLinkBreadcrumb).toHaveAttribute('href', href);
  }
});
