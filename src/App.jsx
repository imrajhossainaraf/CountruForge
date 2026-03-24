import { use } from "react";
import Countries from "./components/countries.jsx";
const api = fetch("https://openapi.programming-hero.com/api/all").then((res) =>
  res.json(),
);

const App = () => {
  const data = use(api);
  return (
    <>
      <div className="bg-black text-white">
        <Countries data={data.countries}></Countries>
      </div>
    </>
  );
};

export default App;
