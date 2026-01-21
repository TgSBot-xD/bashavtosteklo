import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { breadcrumbsItems } from 'widget/hero-section/config';
import { Breadcrumbs } from 'widget/hero-section/ui';

it('should', () => {
  render(<Breadcrumbs />);

  for (const { label, href } of breadcrumbsItems) {
    const getLinkBreadcrumb = screen.getByRole('link', { name: label });
    expect(getLinkBreadcrumb).toHaveAttribute('href', href);
  }
});
