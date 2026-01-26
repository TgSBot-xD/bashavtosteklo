import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Header } from 'src/widgets/header/ui/header';

it('should render telephone link', () => {
  render(<Header />);

  const telephoneLink = screen.getByRole('link', { name: '+7 (927) 236 51 08' });

  expect(telephoneLink).toHaveAttribute('href', 'tel:+79272365108');
});

it('should render link to form', () => {
  render(<Header />);
  const linkToForm = screen.getByRole('link', { name: 'Онлайн-запись' });

  expect(linkToForm).toHaveAttribute('href', '#form');
});
