import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { highlightItems, highlightPerks } from 'widget/hero-section/config';
import { HighlightsPanel } from 'widget/hero-section/ui';

describe('should user highlits content', () => {
  it('should highlits hero content', () => {
    render(<HighlightsPanel />);

    for (const { title, description, displayIndex } of highlightItems) {
      const getTitleHighlight = screen.getByText(title);
      const getDescriptionHighlight = screen.getByText(description);
      const getInndexHighlight = screen.getByText(displayIndex);

      expect(getTitleHighlight).toBeInTheDocument();
      expect(getDescriptionHighlight).toBeInTheDocument();
      expect(getInndexHighlight).toBeInTheDocument();
    }
  });

  it('should highlits bonus content', () => {
    render(<HighlightsPanel />);

    for (const { label } of highlightPerks) {
      const getHighlitBonusContent = screen.getByText(label);

      expect(getHighlitBonusContent).toBeInTheDocument();
    }
  });
});
