interface SuperheroFilterProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

export function SuperheroFilter({
  filter,
  onFilterChange,
}: SuperheroFilterProps) {
  return (
    <input
      type="text"
      className="bg-transparent text-gray-200 text-sm border border-gray-700 p-2 rounded-md focus:outline focus:outline-blue-700"
      placeholder="Search by superhero..."
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}
