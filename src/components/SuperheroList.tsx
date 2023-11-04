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
  images: {
    sm: string;
  };
}

enum BorderClass {
  Gray = 'border-gray-500',
  Green = 'border-green-500',
  Violet = 'border-violet-500',
  Orange = 'border-orange-500',
}

export function SuperheroList() {
  const [superheroes, setSuperheroes] = useState<SuperheroProps[]>([]);
  const [filter, setFilter] = useState<string>('');

  function calculateBorderClass(
    powerstats: SuperheroProps['powerstats']
  ): BorderClass {
    const totalPowerstats = calculateTotalPowerstats(powerstats);

    if (totalPowerstats >= 100 && totalPowerstats <= 200) {
      return BorderClass.Gray;
    }

    if (totalPowerstats > 200 && totalPowerstats <= 300) {
      return BorderClass.Green;
    }

    if (totalPowerstats > 300 && totalPowerstats <= 400) {
      return BorderClass.Violet;
    }

    return BorderClass.Orange;
  }

  function calculateTotalPowerstats(
    powerstats: SuperheroProps['powerstats']
  ): number {
    const { intelligence, strength, speed, durability, power, combat } =
      powerstats;

    return intelligence + strength + speed + durability + power + combat;
  }

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
              className={`mx-auto my-0 p-1 border ${calculateBorderClass(
                superhero.powerstats
              )}`}
            />
            <h2 className="font-medium text-gray-200">
              {superhero.name} -{' '}
              <span className="font-light">
                {calculateTotalPowerstats(superhero.powerstats)}
              </span>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
