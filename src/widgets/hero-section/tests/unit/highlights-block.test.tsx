import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { highlightItems, highlightPerks } from 'src/widgets/hero-section/configs';
import { HighlightsPanel } from 'src/widgets/hero-section/ui';

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
