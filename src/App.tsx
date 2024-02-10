import { useState } from "react";

import { Header } from "./components/Header/Header.tsx";
import { Countries } from "./components/Countries/Countries.tsx";
import { Cities } from "./components/Cities/Cities.tsx";
import { citiesData, countriesData } from "./data/cities-data.ts";

function App() {
  const [currentCountries, setCurrentCountries] = useState(countriesData);
  const [currentCities, setCurrentCities] = useState(citiesData);

  return (
    <>
      <Header title={"Countries of the World"} />
      <main className={"container main slide-in-bottom"}>
        <Countries countries={currentCountries} />
        <Cities cities={currentCities} />
      </main>
    </>
  );
}

export default App;
