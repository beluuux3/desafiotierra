import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-600 text-white p-4 shadow">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-2xl">
          PAISES
        </Link>

        <div className="space-x-4 text-lg font-bold">
          <Link
            to="/"
            className="hover:text-gray-200 hover:bg-slate-900 px-2 py-1 rounded "
          >
            Dashboard
          </Link>
          <Link
            to="/countries"
            className="hover:text-gray-200 hover:bg-slate-900 px-2 py-1 rounded "
          >
            Countries
          </Link>
        </div>
      </nav>
    </header>
  );
}
