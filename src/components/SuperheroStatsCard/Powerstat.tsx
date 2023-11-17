interface PowerstatsProps {
  stat: string;
  value: string | number;
}

export function Powerstats({ stat, value }: PowerstatsProps) {
  return (
    <li key={stat} className="flex items-center justify-between">
      <p className="font-medium mr-1">
        {stat.charAt(0).toUpperCase() + stat.slice(1)}
      </p>
      <hr className="flex-grow border-b border-dotted border-b-zinc-700 mx-0 my-[.625rem]" />
      <span className="ml-1 font-light">{value}</span>
    </li>
  );
}
