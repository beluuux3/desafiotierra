import { useCountries } from "../hooks/useCountries";
import Spinner from "../components/Loader";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { countries, loading } = useCountries();

  if (loading) return <Spinner />;

  const summary = countries.map((c) => ({
    name: c.country,
    cities: c.cities.length,
  }));

  const most = [...summary].sort((a, b) => b.cities - a.cities)[0];
  const least = [...summary].sort((a, b) => a.cities - b.cities)[0];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total de países" value={countries.length} />

        <Card
          title="País con más ciudades"
          value={`${most.name} (${most.cities})`}
        >
          <Link
            to={`/country/${most.name}`}
            className="text-white bg-slate-800 text-md rounded-2xl flex items-center justify-center"
          >
            Ver detalle
          </Link>
        </Card>

        <Card
          title="País con menos ciudades"
          value={`${least.name} (${least.cities})`}
        >
          <Link
            to={`/country/${least.name}`}
            className="text-white flex items-center justify-center rounded-2xl bg-slate-800 text-md"
          >
            Ver detalle
          </Link>
        </Card>
      </div>
    </>
  );
}
