import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-zinc-900">
      <div className="p-4 flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Hero-Hub</h1>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className="border p-2 transition-opacity duration-200 hover:opacity-50"
              >
                Cartas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
