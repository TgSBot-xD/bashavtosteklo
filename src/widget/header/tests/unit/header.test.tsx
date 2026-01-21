import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Header } from 'widget/header/ui';

function setWindowScrollY(scrollY: number) {
  Object.defineProperty(window, 'scrollY', { value: scrollY, configurable: true });
}

describe('when user scrolls on the page', () => {
  beforeEach(() => {
    jest
      .spyOn(global, 'requestAnimationFrame')
      .mockImplementation((frameRequestCallback: FrameRequestCallback) => {
        frameRequestCallback(0);
        return 1;
      });
    jest.spyOn(global, 'cancelAnimationFrame').mockImplementation(() => {});
  });

  it('should header is visible', () => {
    render(<Header />);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toMatchSnapshot();
  });

  it('should update background border on scroll down', () => {
    setWindowScrollY(0);
    render(<Header />);

    const background = screen.getByTestId('background');
    expect(background.className).toContain('border-transparent');

    setWindowScrollY(4);
    fireEvent.scroll(window);
    expect(background.className).toContain('border-white/30');
  });

  it('should update background border on scroll up', () => {
    setWindowScrollY(10);
    render(<Header />);

    const background = screen.getByTestId('background');
    expect(background.className).toContain('border-white/30');

    setWindowScrollY(0);
    fireEvent.scroll(window);

    expect(background.className).toContain('border-transparent');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
