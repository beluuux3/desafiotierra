export default function Card({ title, value, children }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg grid grid-rows-3">
      <p className="text-gray-500 text-lg">{title}</p>
      <p className="text-2xl font-bold flex items-center">{value}</p>
      {children}
    </div>
  );
}
