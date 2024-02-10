import { useContext } from "react";
import { CountriesContext } from "../../store/context.tsx";

interface ICountryProps {
  id: string | number;
  name: string;
  description: string;
  isActive?: boolean;
}

export function Country({ id, name, description, isActive = false }: ICountryProps) {
  const { onSelectedCountryIdChange } = useContext(CountriesContext);

  function onCountrySelected() {
    onSelectedCountryIdChange(id);
  }

  return (
    <li key={id}
        className={`countries__item ${isActive ? "active" : ""}`}
        onClick={onCountrySelected}>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
}
