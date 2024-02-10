import { useContext } from "react";
import { CountriesContext } from "../../store/context.tsx";
import { AddCityForm } from "../Form/AddCityForm.tsx";

export function Cities() {
  const { currentCities, currentCountry } = useContext(CountriesContext);

  return (
    <div className={"cities"}>
      <h2 className={"cities__main-title"}>Cities of {currentCountry?.name}</h2>

      <div className="cities__content">
        <AddCityForm />
      </div>

      <ul className={"cities__list"}>
        {currentCities.map(city => <li key={city.id} className={"cities__item"}>
          <h3>{city.title}</h3>
          <p>{city.description}</p>
        </li>)}
      </ul>
    </div>
  );
}
