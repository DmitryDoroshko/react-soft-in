import { Button } from "../ui/Button/Button.tsx";

interface ICityProps {
  id: string | number;
  title: string;
  description: string;
}

export function City({ title, description }: ICityProps) {
  const editCityHandler = () => {
  };
  const deleteCityHandler = () => {
  };

  return (
    <li className={"cities__item"}>
      <div className="cities__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="cities__actions">
        <Button onClick={editCityHandler}
                className={"cities__edit transparent transparent--black small"}>Edit</Button>
        <Button onClick={deleteCityHandler}
                className={"cities__delete transparent transparent--black small"}>Delete</Button>
      </div>
    </li>
  );
}
