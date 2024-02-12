import { Button } from "../ui/Button/Button.tsx";
import { useContext, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CountriesContext } from "../../store/context.tsx";
import { ModalForm } from "../Modal/ModalForm.tsx";
import { ICity } from "../../types/types.ts";

interface ICityProps {
  id: string | number;
  title: string;
  description: string;
}

export function City({ id, title, description }: ICityProps) {
  const { deleteCity } = useContext(CountriesContext);

  const [editingCity, setEditingCity] = useState<ICity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const editCityHandler = () => {
    openModal();
  };

  const handleSaveCity = () => {};

  const deleteCityHandler = () => {
    try {
      deleteCity(id);
      toast.error("City deleted", {
        position: "bottom-right",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
      <ToastContainer />
      <ModalForm isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSaveCity} />
    </div>
  );
}
