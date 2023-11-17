export interface SuperheroProps {
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
