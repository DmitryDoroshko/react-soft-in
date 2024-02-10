import { ICity } from "../../types/types.ts";

interface CitiesProps {
  cities: ICity[];
}

export function Cities({ cities }: CitiesProps) {
  return (
    <div className={"cities"}>
      <h2 className={"cities__main-title"}>Cities</h2>
      <ul className={"cities__list"}>
        {cities.map(city => <li key={city.id} className={"cities__item"}>
          <h3>{city.title}</h3>
          <p>{city.description}</p>
        </li>)}
      </ul>
    </div>
  );
}
