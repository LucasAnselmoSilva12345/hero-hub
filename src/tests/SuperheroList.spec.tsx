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
    appearance: {
      race: 'Human',
    },
    biography: {
      fullName: 'Richard Milhouse Jones',
      alterEgos: 'No alter egos found.',
      firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
      publisher: 'Marvel Comics',
    },
    images: {
      sm: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg',
    },
  },
];

beforeEach(() => {
  mock.reset();
});

describe('Superhero Component', () => {
  it('should render superhero details fetched from API', async () => {
    const apiUrl = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';
    mock.onGet(apiUrl).reply(200, mockData);

    render(<SuperheroList />);

    await waitFor(() => {
      const getByTextContent = (text: string) => screen.getAllByText(text)[0];

      expect(getByTextContent('A-Bomb')).toBeInTheDocument();
      expect(getByTextContent('38')).toBeInTheDocument();
      expect(getByTextContent('100')).toBeInTheDocument();
      expect(getByTextContent('17')).toBeInTheDocument();
      expect(getByTextContent('80')).toBeInTheDocument();
      expect(getByTextContent('24')).toBeInTheDocument();
      expect(getByTextContent('64')).toBeInTheDocument();
      expect(getByTextContent('Human')).toBeInTheDocument();
      expect(
        getByTextContent('Hulk Vol 2 #2 (April, 2008) (as A-Bomb)')
      ).toBeInTheDocument();
      expect(getByTextContent('Marvel Comics')).toBeInTheDocument();
    });
  });
});
