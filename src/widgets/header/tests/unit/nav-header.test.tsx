import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { NavigationPanel } from 'src/widgets/header/ui/navigation-panel/navigation-panel';

import { NavigationItem } from 'widget/header/models/navigation.types';

it('should render navigation links', () => {
  render(<NavigationPanel />);

  for (const { label, href } of navigationItems) {
    const navigationLink = screen.getByRole('link', { name: label });
    expect(navigationLink).toHaveAttribute('href', href);
  }
});

const navigationItems: NavigationItem[] = [
  { id: 1, label: 'Услуги', href: '#services' },
  { id: 2, label: 'Почему мы', href: '#why' },
  { id: 3, label: 'Примеры', href: '#examples' },
  { id: 4, label: 'Отзывы', href: '#reviews' },
  { id: 5, label: 'Контакты', href: '#contacts' },
];
