import { screen, render, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { SuperheroList } from '../components/SuperheroList';

const mock = new MockAdapter(axios);

const mockData = [
  {
    id: 1,
    name: 'A-Bomb',
    powerstats: {
      intelligence: 38,
      strength: 100,
      speed: 17,
      durability: 80,
      power: 24,
      combat: 64,
    },
    images: {
      sm: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg',
    },
  },
  {
    id: 2,
    name: 'Abe Sapien',
    powerstats: {
      intelligence: 88,
      strength: 28,
      speed: 35,
      durability: 65,
      power: 100,
      combat: 85,
    },
  },
];

beforeEach(() => {
  mock.reset();
});

describe('API superheroes', () => {
  it('should render API superheroes', async () => {
    mock
      .onGet('http://homologacao3.azapfy.com.br/api/ps/metahumans')
      .reply(200, mockData);

    render(<SuperheroList />);

    await waitFor(() => {
      const superheroesElements = screen.getAllByRole('listitem');
      expect(superheroesElements).toHaveLength(563);
    });
  });

  it('should show filter superhero', async () => {
    mock
      .onGet('http://homologacao3.azapfy.com.br/api/ps/metahumans')
      .reply(200, mockData);

    render(<SuperheroList />);

    await waitFor(() => {
      const superheroesElements = screen.getAllByRole('listitem');
      expect(superheroesElements).toHaveLength(563);
    });

    const input = screen.getByPlaceholderText(/search superhero/i);
    expect(input).toBeInTheDocument();
  });
});
