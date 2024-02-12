import { useContext } from "react";
import { CountriesContext } from "../../store/context.tsx";
import { AddCityForm } from "../Form/AddCityForm.tsx";
import { City } from "./City.tsx";

export function Cities() {
  const { currentCities, currentCountry } = useContext(CountriesContext);

  return (
    <div className={"cities"}>
      <h2 className={"cities__main-title"}>Cities of <span
        className={"underlined"}>{currentCountry?.name}</span></h2>

      <div className="cities__content" style={{ marginBottom: "10px" }}>
        <AddCityForm />
      </div>

      <ul className={"cities__list"}>
        {currentCities.map(city => <City key={city.id} {...city} />)}
      </ul>
    </div>
  );
}
