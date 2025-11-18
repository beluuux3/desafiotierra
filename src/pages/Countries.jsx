import { Link } from "react-router-dom";
import Spinner from "../components/Loader";
import { useCountries } from "../hooks/useCountries";

export default function Countries() {
  const { countries, loading } = useCountries();

  if (loading) return <Spinner />;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Paises</h1>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 text-left">País</th>
              <th className="p-3 text-right">Numero Ciudades</th>
            </tr>
          </thead>

          <tbody>
            {countries.map((c) => (
              <tr key={c.country} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <Link
                    className="text-indigo-600"
                    to={`/country/${c.country}`}
                  >
                    {c.country}
                  </Link>
                </td>
                <td className="p-3 text-right">{c.cities.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
