import { screen, render } from '@testing-library/react';
import { RoutesApp } from '../routes';

describe('Header', () => {
  it('should show the name of website', () => {
    render(<RoutesApp />);

    const homeTitle = screen.getByText(/Hero-Hub/i);
    expect(homeTitle).toBeInTheDocument();
  });

  it('should header links have the correct href', () => {
    render(<RoutesApp />);

    const cardsLink = screen.getByText('Cards');
    expect(cardsLink).toHaveAttribute('href', '/');
  });
});
