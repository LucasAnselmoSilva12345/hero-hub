import { useEffect, useState } from 'react';
import { api } from '../api/azapfy';

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

export function SuperheroList() {
  const [superheroes, setSuperheroes] = useState<SuperheroProps[]>([]);

  function calculateBorderClass(powerstats: SuperheroProps['powerstats']) {
    const totalPowerstats = calculateTotalPowerstats(powerstats);

    if (totalPowerstats >= 100 && totalPowerstats <= 200) {
      return 'border-gray-500';
    }

    if (totalPowerstats > 200 && totalPowerstats <= 300) {
      return 'border-green-500';
    }

    if (totalPowerstats > 300 && totalPowerstats <= 400) {
      return 'border-violet-500';
    }

    return 'border-orange-500';
  }

  function calculateTotalPowerstats(powerstats: SuperheroProps['powerstats']) {
    const { intelligence, strength, speed, durability, power, combat } =
      powerstats;

    return intelligence + strength + speed + durability + power + combat;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('');
        if (response.status !== 200) {
          throw new Error('Error ao get API data');
        }
        const data: SuperheroProps[] = response.data;
        setSuperheroes(data);
      } catch (error) {
        console.log('Error ao get superheroes');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-4">
      <ul className="grid grid-cols-1 lg:grid-cols-5">
        {superheroes.map((superhero) => (
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
