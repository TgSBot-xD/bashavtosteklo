import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';

import { Header } from 'pages/landing/ui/header/header';

function setWindowScrollY(scrollY: number) {
  Object.defineProperty(globalThis, 'scrollY', { value: scrollY, configurable: true });
}

describe('when user scrolls on the page', () => {
  let rafCallbacks: FrameRequestCallback[] = [];
  let rafId = 0;

  beforeEach(() => {
    rafCallbacks = [];
    rafId = 0;

    jest
      .spyOn(globalThis, 'requestAnimationFrame')
      .mockImplementation((callback: FrameRequestCallback) => {
        rafCallbacks.push(callback);
        return ++rafId;
      });
    jest.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {});
  });

  function flushRaf() {
    const callbacks = [...rafCallbacks];
    rafCallbacks = [];
    callbacks.forEach((cb) => cb(performance.now()));
  }

  it('should update background border on scroll down', () => {
    setWindowScrollY(0);
    render(<Header />);

    expect(screen.getByTestId('header').className).not.toContain('backdrop-blur-sm');
    expect(screen.getByTestId('divider')).toHaveClass('hidden');

    setWindowScrollY(11);
    act(() => {
      fireEvent.scroll(window);
      flushRaf();
    });

    expect(screen.getByTestId('header').className).toContain('backdrop-blur-sm');
    expect(screen.getByTestId('divider')).not.toHaveClass('hidden');
  });

  it('should update background border on scroll up', () => {
    setWindowScrollY(20);
    render(<Header />);
    act(() => {
      flushRaf();
    });

    expect(screen.getByTestId('header').className).toContain('backdrop-blur-sm');
    expect(screen.getByTestId('divider')).not.toHaveClass('hidden');

    setWindowScrollY(0);
    act(() => {
      fireEvent.scroll(window);
      flushRaf();
    });

    expect(screen.getByTestId('header').className).not.toContain('backdrop-blur-sm');
    expect(screen.getByTestId('divider')).toHaveClass('hidden');
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
