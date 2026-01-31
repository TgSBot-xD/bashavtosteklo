import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ContactMap } from '../../../ui/contacts/map';

jest.mock('@pbe/react-yandex-maps', () => ({
  YMaps: ({ children }: { children: React.ReactNode }) => <div data-testid="ymaps">{children}</div>,
  Map: ({ children, className }: { children: React.ReactNode; className: string }) => (
    <div data-testid="map" className={className}>
      {children}
    </div>
  ),
  Placemark: ({ properties }: { properties: { hintContent: string } }) => (
    <div data-testid="placemark" data-hint={properties.hintContent} />
  ),
}));

describe('ContactMap', () => {
  it('should render map container', () => {
    render(<ContactMap />);

    expect(screen.getByTestId('ymaps')).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

  it('should render placemark with correct hint', () => {
    render(<ContactMap />);

    const placemark = screen.getByTestId('placemark');
    expect(placemark).toHaveAttribute('data-hint', 'БашАвтоСтекло');
  });

  it('should render "Открыть в картах" link', () => {
    render(<ContactMap />);

    const link = screen.getByRole('link', { name: 'Открыть в картах' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('yandex.ru/maps'));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should render address badge', () => {
    render(<ContactMap />);

    expect(screen.getByText('точка: Донского 50а')).toBeInTheDocument();
  });
});
