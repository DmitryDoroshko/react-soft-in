interface ICountryProps {
  id: string | number;
  name: string;
  description: string;
  isActive?: boolean;
}

export function Country({ id, name, description, isActive = false }: ICountryProps) {
  return (
    <li key={id} className={`countries__item ${isActive ? "active" : ""}`}>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
}
