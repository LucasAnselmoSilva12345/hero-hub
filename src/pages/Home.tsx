import { SuperheroList } from '../components/SuperheroList';

export function Home() {
  return (
    <section className="p-4">
      <h2 className="text-xl text-gray-200 font-medium">Super-heroes list</h2>

      <SuperheroList />
    </section>
  );
}
