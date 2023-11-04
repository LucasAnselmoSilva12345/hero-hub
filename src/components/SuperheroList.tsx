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
    <div>
      <ul>
        {superheroes.map((superhero) => (
          <li
            key={superhero.id}
            className={`border ${calculateBorderClass(superhero.powerstats)}`}
          >
            <img src={superhero.images.sm} alt={superhero.name} />
            <h2>
              {superhero.name} -{' '}
              {calculateTotalPowerstats(superhero.powerstats)}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
