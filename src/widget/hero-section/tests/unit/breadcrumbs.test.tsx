import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { breadcrumbLinks } from 'widget/hero-section/configs';
import { Breadcrumbs } from 'widget/hero-section/ui';

it('should render breadcrumb links', () => {
  render(<Breadcrumbs />);

  for (const { label, href } of breadcrumbLinks) {
    const breadcrumbLink = screen.getByRole('link', { name: label });
    expect(breadcrumbLink).toHaveAttribute('href', href);
  }
});
