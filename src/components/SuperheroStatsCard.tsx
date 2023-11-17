import { SuperheroProps } from '../types/SuperheroProps';

export function SuperheroStatsCard({
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
      <div className="flex items-center justify-between">
        <img src={smallImage} alt={name} />
        <div className="flex flex-1 flex-col">
          <h2 className="text-zinc-200 text-4xl font-bold">{name}</h2>
          <h3 className="text-zinc-600 text-base font-medium">
            {appearance.race}
          </h3>
        </div>
      </div>

      <div className="py-2">
        <ul className="grid grid-cols-1 px-3">
          {Object.entries(powerstats).map(([stat, value]) => (
            <li key={stat} className="flex items-center justify-between">
              <p className="font-medium mr-1">
                {stat.charAt(0).toUpperCase() + stat.slice(1)}
              </p>
              <hr className="flex-grow border-b border-dotted border-b-zinc-700 mx-0 my-[.625rem]" />
              <span className="ml-1 font-light">{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-950 font-semibold flex items-center justify-between p-3 rounded-b-md">
        <h6 className="text-sm">{biography.firstAppearance}</h6>
        <span className="text-xs font-medium">{biography.publisher}</span>
      </div>
    </li>
  );
}
