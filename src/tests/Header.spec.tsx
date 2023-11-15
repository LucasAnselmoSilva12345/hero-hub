import { screen, render } from '@testing-library/react';
import { RoutesApp } from '../routes';

describe('Header Component', () => {
  beforeEach(() => {
    render(<RoutesApp />);
  });

  it('should display the website name', () => {
    const websiteName = screen.getByText(/Hero-Hub/i);
    expect(websiteName).toBeInTheDocument();
  });

  it('should have the correct href for header links', () => {
    const cardsLink = screen.getByText('Cards');
    expect(cardsLink).toHaveAttribute('href', '/');
  });
});
