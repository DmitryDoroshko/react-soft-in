import { useContext } from "react";
import { CountriesContext } from "../../store/context.tsx";

export function Cities() {
  const {currentCities} = useContext(CountriesContext);

  return (
    <div className={"cities"}>
      <h2 className={"cities__main-title"}>Cities</h2>
      <ul className={"cities__list"}>
        {currentCities.map(city => <li key={city.id} className={"cities__item"}>
          <h3>{city.title}</h3>
          <p>{city.description}</p>
        </li>)}
      </ul>
    </div>
  );
}
