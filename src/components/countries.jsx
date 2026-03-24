import { useState } from "react";
import { toast } from "react-toastify";

function CountryCard({ a, index }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    toast(
      <div className="flex flex-col gap-2 max-w-xs transition-all duration-300">
        <div className="border-b border-neutral-700 pb-2 mb-1">
          <h4 className="font-black text-lg leading-tight uppercase tracking-wide">
            {a.name.common}
          </h4>
          <p className="text-[10px] text-neutral-500 font-medium italic">
            {a.name.official}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px]">
          <div>
            <p className="text-neutral-500 font-bold uppercase tracking-tighter">Region</p>
            <p className="font-semibold">{a.region.region}</p>
          </div>
          <div>
            <p className="text-neutral-500 font-bold uppercase tracking-tighter">Capital</p>
            <p className="font-semibold">{a.capital.capital?.join(", ") || "N/A"}</p>
          </div>
          <div className="col-span-2">
            <p className="text-neutral-500 font-bold uppercase tracking-tighter">Currencies</p>
            <p className="font-semibold">
              {Object.values(a.currencies.currencies || {})
                .map((c) => `${c.name} (${c.symbol})`)
                .join(", ")}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-neutral-500 font-bold uppercase tracking-tighter">Languages</p>
            <p className="font-semibold">
              {Object.values(a.languages.languages || {}).join(", ")}
            </p>
          </div>
          <div>
            <p className="text-neutral-500 font-bold uppercase tracking-tighter">Population</p>
            <p className="font-semibold">{a.population.population.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-neutral-500 font-bold uppercase tracking-tighter">Area</p>
            <p className="font-semibold">{a.area.area.toLocaleString()} km²</p>
          </div>
          <div>
            <p className="text-neutral-500 font-bold uppercase tracking-tighter">Codes</p>
            <p className="font-semibold font-mono">
              {a.cca3.cca3} / {a.ccn3.ccn3}
            </p>
          </div>
          <div>
            <p className="text-neutral-500 font-bold uppercase tracking-tighter">Continent</p>
            <p className="font-semibold">{a.continents.continents?.join(", ")}</p>
          </div>
        </div>
      </div>,
      {
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  return (
    <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.98]">
      <div className="h-40 overflow-hidden">
        <img
          src={a.flags.flags.png}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          alt={a.flags.flags.alt}
        />
      </div>
      <div className="p-5 flex flex-col items-center justify-center grow">
        <h2 className="text-lg font-bold text-center">
          {index}. {a.name.common}
        </h2>
        <p className="text-neutral-400 font-medium">
          Capital: {a.capital.capital}
        </p>
        <button
          className={`${
            clicked ? "bg-indigo-600 border-indigo-500" : "bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
          } border rounded-lg px-4 py-2 mt-4 transition-all duration-300 cursor-pointer text-sm font-semibold`}
          onClick={handleClick}
        >
          {clicked ? "✓ Clicked" : "Learn More"}
        </button>
      </div>
    </div>
  );
}

export default function Countries({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-12">
      {data.map((country, index) => (
        <CountryCard key={country.ccn3?.ccn3 || index} a={country} index={index} />
      ))}
    </div>
  );
}
