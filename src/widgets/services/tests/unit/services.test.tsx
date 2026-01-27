import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { servicesList } from 'widget/services/config/services-items';
import { Services } from 'widget/services/ui/services';

it('should render services items', () => {
  render(<Services />);

  for (const { title, label, workingHours, id } of servicesList) {
    const servicesItems = screen.getByTestId(id);
    const servicesTitle = screen.getByText(title);
    const servicesLabelOne = screen.getByText(label[0]);
    const servicesLabelTwo = screen.getByText(label[1]);
    const servicesWorkingHours = screen.getByText(workingHours);

    expect(servicesTitle).toBeInTheDocument();
    expect(servicesLabelOne).toBeInTheDocument();
    expect(servicesLabelTwo).toBeInTheDocument();
    expect(servicesWorkingHours).toBeInTheDocument();
    expect(servicesItems).toMatchSnapshot();
  }
});
