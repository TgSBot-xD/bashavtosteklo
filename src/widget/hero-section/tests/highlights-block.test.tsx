import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { listHighlights, listHighlightsBonus } from '../config/highlightsList';
import { HighlightsBlock } from '../ui/highlights-block';

describe('should user highlits content', () => {
  it('should highlits hero content', () => {
    render(<HighlightsBlock />);

    for (const { title, description, index } of listHighlights) {
      const getTitleHighlight = screen.getByText(title);
      const getDescriptionHighlight = screen.getByText(description);
      const getInndexHighlight = screen.getByText(index);

      expect(getTitleHighlight).toBeInTheDocument();
      expect(getDescriptionHighlight).toBeInTheDocument();
      expect(getInndexHighlight).toBeInTheDocument();
    }
  });
  it('should highlits bonus content', () => {
    render(<HighlightsBlock />);

    for (const { label } of listHighlightsBonus) {
      const getHighlitBonusContent = screen.getByText(label);

      expect(getHighlitBonusContent).toBeInTheDocument();
    }
  });
});
