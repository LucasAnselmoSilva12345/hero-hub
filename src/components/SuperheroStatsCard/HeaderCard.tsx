interface HeaderCardProps {
  smallImage: string;
  name: string;
  race: string;
}

export function HeaderCard({ smallImage, name, race }: HeaderCardProps) {
  return (
    <div className="flex items-center justify-between">
      <img src={smallImage} alt={name} />
      <div className="flex flex-1 flex-col">
        <h2 className="text-zinc-200 text-4xl font-bold">{name}</h2>
        <h3 className="text-zinc-600 text-base font-medium">{race}</h3>
      </div>
    </div>
  );
}
