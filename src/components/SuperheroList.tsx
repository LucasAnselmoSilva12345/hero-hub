import { useEffect, useState } from 'react';
import { api } from '../api/azapfy';
import { SuperheroFilter } from './SuperheroFilter';
import { SuperheroStatsCard } from './SuperheroStatsCard';
import { SuperheroProps } from '../types/SuperheroProps';

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
      <ul className="py-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSuperheroes.map((superhero) => (
          <SuperheroStatsCard
            id={superhero.id}
            name={superhero.name}
            images={superhero.images}
            key={superhero.id}
            powerstats={superhero.powerstats}
            biography={superhero.biography}
            appearance={superhero.appearance}
          />
        ))}
      </ul>
    </div>
  );
}
