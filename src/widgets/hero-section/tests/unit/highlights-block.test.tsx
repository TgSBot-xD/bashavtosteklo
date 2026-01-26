import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { HighlightsPanel } from 'src/widgets/hero-section/ui';

import { HighlightItem, HighlightPerk } from 'widget/hero-section/models';

describe('when highlights panel is rendered', () => {
  it('should render highlight items', () => {
    render(<HighlightsPanel />);

    for (const { title, description, displayIndex } of highlightItems) {
      const highlightTitle = screen.getByText(title);
      const highlightDescription = screen.getByText(description);
      const highlightIndex = screen.getByText(displayIndex);

      expect(highlightTitle).toBeInTheDocument();
      expect(highlightDescription).toBeInTheDocument();
      expect(highlightIndex).toBeInTheDocument();
    }
  });

  it('should render highlight perks', () => {
    render(<HighlightsPanel />);

    for (const { label } of highlightPerks) {
      const perkLabel = screen.getByText(label);

      expect(perkLabel).toBeInTheDocument();
    }
  });
});

const highlightItems: HighlightItem[] = [
  {
    displayIndex: '01',
    title: 'Замена стёкол',
    description: 'От 1 часа · гарантия 1 год · стекла напрямую с заводов',
  },
  {
    displayIndex: '02',
    title: 'Ремонт',
    description: 'От 10 минут · современный прозрачный полимер',
  },
  {
    displayIndex: '03',
    title: 'Тонировка',
    description: 'Плёнка США/Корея · гарантия 5–10 лет',
  },
];

const highlightPerks: HighlightPerk[] = [
  {
    id: 1,
    label: 'чай/кофе',
  },
  {
    id: 2,
    label: 'Wi-Fi',
  },
  { id: 3, label: 'Печеньки' },
];
