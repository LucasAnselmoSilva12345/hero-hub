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
      <ul className="py-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSuperheroes.map((superhero) => (
          <li
            key={superhero.id}
            className="w-full text-center border rounded-lg border-zinc-800 transition-all duration-200 hover:border-blue-950"
          >
            <div className="flex items-center justify-between">
              <img
                src={superhero.images.sm}
                alt={superhero.name}
                className=""
              />
              <div className="flex flex-1 flex-col">
                <h2 className="text-zinc-200 text-4xl font-bold">
                  {superhero.name}
                </h2>
                <h3 className="text-zinc-600 text-base font-medium">
                  {superhero.appearance.race}
                </h3>
              </div>
            </div>

            <div className="py-2">
              <ul className="grid grid-cols-1 px-3">
                <li className="flex items-center justify-between">
                  <p className="mr-1 font-medium">Intelligence</p>
                  <hr className="flex-grow border-b border-dotted border-b-zinc-700 mx-0 my-[.625rem]" />
                  <span className="ml-1 font-light">
                    {superhero.powerstats.intelligence}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <p className="font-medium">Strength</p>
                  <span className="font-light">
                    {superhero.powerstats.strength}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <p className="font-medium">Speed</p>
                  <span className="font-light">
                    {superhero.powerstats.speed}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <p className="font-medium">Durability</p>
                  <span className="font-light">
                    {superhero.powerstats.durability}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <p className="font-medium">Power</p>
                  <span className="font-light">
                    {superhero.powerstats.power}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <p className="font-medium">Combat</p>
                  <span className="font-light">
                    {superhero.powerstats.combat}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-950 font-semibold flex items-center justify-between p-3 rounded-b-md">
              <h6 className="text-sm">{superhero.biography.firstAppearance}</h6>
              <span className="text-xs font-medium">
                {superhero.biography.publisher}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
