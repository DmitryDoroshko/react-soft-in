import { ICountry } from "../../types/types.ts";
import { Country } from "./Country.tsx";

interface CountriesProps {
  countries: ICountry[];
}

export function Countries({ countries }: CountriesProps) {
  return (
    <div className={"countries"}>
      <h2 className={"countries__main-heading"}>Countries</h2>
      <ul className={"countries__list"}>
        {
          countries.map(({ id, name, description }) => (
              <Country key={id} id={id} description={description} name={name} />
            ),
          )
        }
      </ul>
    </div>
  );
}
