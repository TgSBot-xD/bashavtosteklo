import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { featureList } from 'widget/why-we/config/feature-list';
import { FeaturesList } from 'widget/why-we/ui/features-list';

it('should render feature', () => {
  render(<FeaturesList />);

  for (const { label, id } of featureList) {
    const featuresItemText = screen.getByText(label);
    const featuresItem = screen.getByTestId(id);

    expect(featuresItemText).toBeInTheDocument();
    expect(featuresItem).toMatchSnapshot();
  }
});
