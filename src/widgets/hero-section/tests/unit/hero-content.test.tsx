import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { HeroContent } from 'src/widgets/hero-section/ui';

import { HeroSecondaryInfoItem } from 'widget/hero-section/models';

it('should render secondary info items', () => {
  render(<HeroContent />);

  for (const { id } of secondaryInfoItems) {
    const secondaryInfoItem = screen.getByTestId(`secondary-info-${id}`);
    expect(secondaryInfoItem).toBeInTheDocument();
  }
});

const secondaryInfoItems: HeroSecondaryInfoItem[] = [
  {
    id: 1,
    label: 'ул. Дмитрия Донского, 50а',
  },
  {
    id: 2,
    label: 'Пн-ВС: 10:00-20:00',
  },
  {
    id: 3,
    label: 'Гарантия на работы',
  },
];
