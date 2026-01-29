import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from 'pages/landing/ui/header/header';

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

  it('should update background border on scroll down', () => {
    setWindowScrollY(0);
    render(<Header />);

    expect(screen.getByTestId('header').className).not.toContain('backdrop-blur-sm');
    expect(screen.queryByTestId('divider')).toBeInTheDocument();

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

it('should render telephone link', () => {
  render(<Header />);

  const telephoneLink = screen.getByRole('link', { name: '+7 (927) 236 51 08' });

  expect(telephoneLink).toHaveAttribute('href', 'tel:+79272365108');
});

it('should render link to form', () => {
  render(<Header />);
  const linkToForm = screen.getByRole('link', { name: 'Онлайн-запись' });

  expect(linkToForm).toHaveAttribute('href', '#form');
});
