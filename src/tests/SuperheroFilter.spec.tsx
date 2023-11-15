import { screen, render } from '@testing-library/react';
import { SuperheroFilter } from '../components/SuperheroFilter';

describe('SuperheroFilter Component', () => {
  it('should display placeholder in superhero input field', async () => {
    render(
      <SuperheroFilter
        filter={''}
        onFilterChange={function handleFilterChange(): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    const superheroInput = screen.getByPlaceholderText(
      /Search by superhero.../i
    );
    expect(superheroInput).toBeInTheDocument();
  });
});
