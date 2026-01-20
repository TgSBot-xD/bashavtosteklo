import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ContactInfo } from '../ui/contact-info';

it('should show telephone compony', () => {
  render(<ContactInfo />);

  const shouldTelephoneNumber = screen.getByRole('link', { name: '+7 (927) 236 51 08' });

  expect(shouldTelephoneNumber).toHaveAttribute('href', 'tel:+79272365108');
});
