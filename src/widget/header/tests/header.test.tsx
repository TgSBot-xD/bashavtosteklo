import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Header } from '../ui/Header';

describe('when user scroled in to the site', () => {
  beforeEach(() => {
    jest.spyOn(global, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });
    jest.spyOn(global, 'cancelAnimationFrame').mockImplementation(() => {});
  });

  it('should user scroll down', () => {
    window.scrollY = 0;
    render(<Header />);

    const background = screen.getByTestId('background');
    expect(background.className).toContain('border-transparent');

    window.scrollY = 4;
    fireEvent.scroll(window);
    expect(background.className).toContain('border-white/30');
  });

  it('should user scroll up', () => {
    window.scrollY = 10;
    render(<Header />);

    const background = screen.getByTestId('background');
    expect(background.className).toContain('border-white/30');

    window.scrollY = 0;
    fireEvent.scroll(window);

    expect(background.className).toContain('border-transparent');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
