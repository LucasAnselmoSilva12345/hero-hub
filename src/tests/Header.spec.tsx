import { screen, render } from '@testing-library/react';
import { RoutesApp } from '../routes';

describe('Header', () => {
  it('should show the name of website', () => {
    render(<RoutesApp />);

    expect(screen.getByText(/Hero-Hub/i)).toBeInTheDocument();
  });
});
