import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

import { Brand } from '../ui/brand';

it('should render hover', async () => {
  render(<Brand />);

  await useEvent.hover(screen.getByText(/черниковка/i));

  expect(await screen.findByText(/дмитрия донского/i)).toBeInTheDocument();
});

it('should renvder brand name', () => {
  render(<Brand />);

  const brand = screen.getByTestId('hero');
  expect(brand).toBeInTheDocument();
});
