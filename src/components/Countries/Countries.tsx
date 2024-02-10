import { Country } from "./Country.tsx";
import { useContext } from "react";
import { CountriesContext } from "../../store/context.tsx";

export function Countries() {
  const { currentCountries: countries } = useContext(CountriesContext);

  return (
    <div className={"countries"}>
      <h2 className={"countries__main-heading"}>Countries</h2>
      <ul className={"countries__list"}>
        {
          countries.map(({ id, name, description, isActive }) => (
              <Country key={id} id={id} description={description} name={name} isActive={isActive} />
            ),
          )
        }
      </ul>
    </div>
  );
}
