import { SuperheroList } from '../components/SuperheroList';

export function Home() {
  return (
    <section className="p-4">
      <h2>Super-heroes list</h2>

      <SuperheroList />
    </section>
  );
}
