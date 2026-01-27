import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Breadcrumbs } from 'src/widgets/hero-section/ui';

import { breadcrumbLinks } from 'widget/hero-section/configs';

it('should render breadcrumb links', () => {
  render(<Breadcrumbs />);

  for (const { label, href, id } of breadcrumbLinks) {
    const breadcrumbLink = screen.getByRole('link', { name: label });
    const breadcrumbItem = screen.getByTestId(id);

    expect(breadcrumbLink).toHaveAttribute('href', href);
    expect(breadcrumbItem).toMatchSnapshot();
  }
});
