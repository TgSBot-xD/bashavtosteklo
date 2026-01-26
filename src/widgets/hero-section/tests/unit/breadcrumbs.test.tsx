import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Breadcrumbs } from 'src/widgets/hero-section/ui';

import { BreadcrumbLinkItem } from 'widget/hero-section/models';

it('should render breadcrumb links', () => {
  render(<Breadcrumbs />);

  for (const { label, href } of breadcrumbLinks) {
    const breadcrumbLink = screen.getByRole('link', { name: label });
    expect(breadcrumbLink).toHaveAttribute('href', href);
  }
});

const breadcrumbLinks: BreadcrumbLinkItem[] = [
  {
    label: 'АВТОСТЁКЛА',
    href: '#Автостёкла',
  },
  {
    label: 'ТОНИРОВКА',
    href: '#Тонировка',
  },
  {
    label: 'ПЛЁНКИ',
    href: '#Плёнки',
  },
  {
    label: 'КОНДИЦИОНЕРЫ',
    href: '#Кондиционеры',
  },
];
