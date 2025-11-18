import React from "react";
import { useCountries } from "../hooks/useCountries";
import Loader from "./Loader";

export default function CountryTable() {
  const { countries, loading } = useCountries();
  if (loading) return <Loader />;
  const country = countries[0];
  return (
    <>
      <div className="bg-white p-4 rounded shadow h-96 overflow-y-auto">
        {country.cities.map((city) => (
          <p key={city} className="p-2 rounded mb-2">
            {city}
          </p>
        ))}
      </div>
    </>
  );
}
