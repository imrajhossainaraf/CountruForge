export default function Countries({ data }) {
  console.log(data);
  return (
    <>
      {data.map((a) => (
        <div
          className="border flex container w-140 mx-auto p-2"
          key={a.ccn3.ccn3}
        >
          <img
            src={a.flags.flags.png}
            clasName="w-auto h-auto"
            alt={a.flags.flags.alt}
          />
          <div className="flex flex-col text-white font-bold items-center w-full justify-center">
            <h1>Name: {a.name.common}</h1>
            <h2>Capital: {a.capital.capital}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
