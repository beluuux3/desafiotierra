import React from "react";

export default function CountryTable({ country }) {
  if (!country || !Array.isArray(country.cities) || country.cities.length === 0)
    return null;

  return (
    <div className="bg-white p-4 rounded shadow h-96 overflow-y-auto">
      {country.cities.map((city) => (
        <p key={city} className="p-2 rounded mb-2">
          {city}
        </p>
      ))}
    </div>
  );
}
