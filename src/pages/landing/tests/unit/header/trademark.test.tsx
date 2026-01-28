import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from 'pages/landing/ui/header/header';

it('should render hover', async () => {
  render(<Header />);

  await userEvent.hover(screen.getByText(/черниковка/i));

  expect(await screen.findByText(/ул. дмитрия донского, 50а/i)).toBeInTheDocument();
});
