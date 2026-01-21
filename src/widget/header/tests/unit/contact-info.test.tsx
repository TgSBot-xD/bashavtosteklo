import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ContactInfo } from 'widget/header/ui';

it('should render telephone link', () => {
  render(<ContactInfo />);

  const telephoneLink = screen.getByRole('link', { name: '+7 (927) 236 51 08' });

  expect(telephoneLink).toHaveAttribute('href', 'tel:+79272365108');
});
