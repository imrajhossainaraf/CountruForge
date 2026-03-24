import { use, Suspense } from "react";
import Countries from "./components/countries.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const api = fetch("https://openapi.programming-hero.com/api/all").then((res) =>
  res.json(),
);

const App = () => {
  const data = use(api);
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        <header className="py-12 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-center bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-500">
           Aru's Country Network
          </h1>
          <p className="mt-4 text-neutral-400 font-medium">Explore the countries of the world</p>
        </header>
        
        <Suspense fallback={
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-neutral-800 border-t-white rounded-full animate-spin"></div>
          </div>
        }>
          <Countries data={data.countries}></Countries>
        </Suspense>
      </div>
      <ToastContainer position="top-right" theme="dark" />
    </main>
  );
};

export default App;
