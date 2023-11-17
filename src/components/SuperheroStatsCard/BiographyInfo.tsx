interface BiographyInfoProps {
  firstAppearance: string;
  publisher: string;
}

export function BiographyInfo({
  firstAppearance,
  publisher,
}: BiographyInfoProps) {
  return (
    <div className="bg-blue-950 font-semibold flex items-center justify-between p-3 rounded-b-md">
      <h6 className="text-sm">{firstAppearance}</h6>
      <span className="text-xs font-medium">{publisher}</span>
    </div>
  );
}
