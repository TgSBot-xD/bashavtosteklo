import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Header } from 'src/widgets/header/ui/header';

function setWindowScrollY(scrollY: number) {
  Object.defineProperty(globalThis, 'scrollY', { value: scrollY, configurable: true });
}

describe('when user scrolls on the page', () => {
  beforeEach(() => {
    jest
      .spyOn(globalThis, 'requestAnimationFrame')
      .mockImplementation((frameRequestCallback: FrameRequestCallback) => {
        frameRequestCallback(0);
        return 1;
      });
    jest.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {});
  });

  it('should header is visible', () => {
    render(<Header />);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should update background border on scroll down', () => {
    setWindowScrollY(0);
    render(<Header />);

    expect(screen.getByTestId('header').className).not.toContain('backdrop-blur-sm');

    setWindowScrollY(4);
    fireEvent.scroll(window);
    expect(screen.getByTestId('header').className).toContain('backdrop-blur-sm');
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('should update background border on scroll up', () => {
    setWindowScrollY(10);
    render(<Header />);

    expect(screen.getByTestId('header').className).toContain('backdrop-blur-sm');
    expect(screen.getByTestId('divider')).toBeInTheDocument();

    setWindowScrollY(0);
    fireEvent.scroll(window);

    expect(screen.getByTestId('header').className).not.toContain('backdrop-blur-sm');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
