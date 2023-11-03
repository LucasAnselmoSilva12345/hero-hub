import { screen, render } from '@testing-library/react';
import { Home } from '../pages/Home';

describe('Homepage', () => {
  it('should homepage title', () => {
    render(<Home />);

    expect(screen.getByText(/Super-heroes list/i)).toBeInTheDocument();
  });
});
