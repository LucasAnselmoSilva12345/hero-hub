/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen, render } from '@testing-library/react';
import { SuperheroFilter } from '../components/SuperheroFilter';

describe('Superhero Filter', () => {
  it('should show filter placeholder on superhero input', async () => {
    render(
      <SuperheroFilter
        filter={''}
        onFilterChange={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    const input = screen.getByPlaceholderText(/Search by superhero.../i);
    expect(input).toBeInTheDocument();
  });
});
