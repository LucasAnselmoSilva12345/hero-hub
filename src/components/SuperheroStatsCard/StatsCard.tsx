import { SuperheroProps } from '../../types/SuperheroProps';
import { BiographyInfo } from './BiographyInfo';
import { HeaderCard } from './HeaderCard';
import { Powerstats } from './Powerstat';

export function StatsCard({
  id,
  images,
  name,
  powerstats,
  biography,
  appearance,
}: SuperheroProps) {
  const { sm: smallImage } = images;

  return (
    <li
      key={id}
      className="w-full text-center border rounded-lg border-zinc-800 transition-all duration-200 hover:border-blue-950"
    >
      <HeaderCard smallImage={smallImage} name={name} race={appearance.race} />

      <div className="py-2">
        <ul className="grid grid-cols-1 px-3">
          {Object.entries(powerstats).map(([stat, value]) => (
            <Powerstats key={stat} stat={stat} value={value} />
          ))}
        </ul>
      </div>

      <BiographyInfo
        firstAppearance={biography.firstAppearance}
        publisher={biography.publisher}
      />
    </li>
  );
}
