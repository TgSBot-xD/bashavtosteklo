import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { HighlightsPanel } from 'src/widgets/hero-section/ui';

import { highlightItems, highlightPerks } from 'widget/hero-section/configs';

describe('when highlights panel is rendered', () => {
  it('should render highlight items', () => {
    render(<HighlightsPanel />);

    for (const { title, description, displayIndex } of highlightItems) {
      const highlightTitle = screen.getByText(title);
      const highlightDescription = screen.getByText(description);
      const highlightIndex = screen.getByText(displayIndex);
      const highlightItem = screen.getByTestId(displayIndex);

      expect(highlightTitle).toBeInTheDocument();
      expect(highlightDescription).toBeInTheDocument();
      expect(highlightIndex).toBeInTheDocument();
      expect(highlightItem).toMatchSnapshot();
    }
  });

  it('should render highlight perks', () => {
    render(<HighlightsPanel />);

    for (const { label, id } of highlightPerks) {
      const highlightPerkLabel = screen.getByText(label);
      const highlightPerkItem = screen.getByTestId(id);

      expect(highlightPerkLabel).toBeInTheDocument();
      expect(highlightPerkItem).toMatchSnapshot();
    }
  });
});
