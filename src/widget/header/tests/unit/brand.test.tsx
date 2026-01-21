import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Brand } from 'widget/header/ui';

it('should render hover', async () => {
  render(<Brand />);

  await userEvent.hover(screen.getByText(/черниковка/i));

  expect(await screen.findByText(/г. уфа, дмитрия донского, 50а/i)).toBeInTheDocument();
});

it('should render brand name', () => {
  render(<Brand />);

  const brandTitle = screen.getByTestId('brand-title');
  expect(brandTitle).toBeInTheDocument();
});
