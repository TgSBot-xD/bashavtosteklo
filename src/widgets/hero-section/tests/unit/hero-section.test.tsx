import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { HeroSection } from 'widget/hero-section/ui/hero-section';

describe('hero section is visible for user', () => {
  it('should hero content on hero section block', () => {
    render(<HeroSection />);

    const heroContent = screen.getByTestId('hero-content');
    expect(heroContent).toBeInTheDocument();
  });
  it('should highlights on hero section block', () => {
    render(<HeroSection />);

    const heroContent = screen.getByTestId('highlights-panel');
    expect(heroContent).toBeInTheDocument();
  });
});
