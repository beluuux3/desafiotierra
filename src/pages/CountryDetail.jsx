import { useParams, Link } from "react-router-dom";
import { useCountries } from "../hooks/useCountries";
import Spinner from "../components/Loader";
import CountryTable from "../components/CountryTable";
export default function CountryDetail() {
  const { name } = useParams();
  const { countries, loading } = useCountries();

  if (loading) return <Spinner />;

  const country = countries.find((c) => c.country === name);

  if (!country) return <p>País no encontrado</p>;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{country.country}</h1>

      <p className="text-gray-600 mb-4">
        Total ciudades: <strong>{country.cities.length}</strong>
      </p>
      <CountryTable country={country} />

      <Link to="/countries" className="text-indigo-600 mt-4 block">
        Volver
      </Link>
    </>
  );
}
