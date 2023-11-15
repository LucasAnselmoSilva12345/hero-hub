import { useEffect, useState } from 'react';
import { api } from '../api/azapfy';
import { SuperheroFilter } from './SuperheroFilter';

interface SuperheroProps {
  id: number;
  name: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    race: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    firstAppearance: string;
    publisher: string;
  };
  images: {
    sm: string;
  };
}

export function SuperheroList() {
  const [superheroes, setSuperheroes] = useState<SuperheroProps[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('');
        if (response.status !== 200) {
          throw new Error(
            'Failed to fetch API data. Status code: ' + response.status
          );
        }
        const data: SuperheroProps[] = response.data;
        setSuperheroes(data);
      } catch (error) {
        console.error('Error while fetching superheroes: ', error);
      }
    };

    fetchData();
  }, []);

  const filteredSuperheroes = superheroes.filter((superhero) =>
    superhero.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="py-4 text-center lg:text-right">
      <SuperheroFilter filter={filter} onFilterChange={setFilter} />
      <ul className="py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {filteredSuperheroes.map((superhero) => (
          <li
            key={superhero.id}
            className="p-2 text-center cursor-pointer transition-all duration-200 hover:scale-105"
          >
            <img
              src={superhero.images.sm}
              alt={superhero.name}
              className="mx-auto my-0 p-1 border"
            />
            <h2 className="font-medium text-gray-200">{superhero.name}</h2>
            <div>
              <ul>
                <li>{superhero.powerstats.intelligence}</li>
                <li>{superhero.powerstats.strength}</li>
                <li>{superhero.powerstats.speed}</li>
                <li>{superhero.powerstats.durability}</li>
                <li>{superhero.powerstats.power}</li>
                <li>{superhero.powerstats.combat}</li>
              </ul>
            </div>

            <h4>{superhero.appearance.race}</h4>
            <h4>{superhero.biography.fullName}</h4>
            <h4>{superhero.biography.alterEgos}</h4>
            <h4>{superhero.biography.firstAppearance}</h4>
            <h4>{superhero.biography.publisher}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
