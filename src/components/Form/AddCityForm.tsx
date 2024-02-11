import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/Button/Button.tsx";
import { CountriesContext } from "../../store/context.tsx";

type FormData = {
  cityName: string;
  cityDescription: string;
};

export function AddCityForm() {
  const { addCity, selectedCountryId } = useContext(CountriesContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleMakeFormVisible = () => {
    setIsFormVisible(prevState => !prevState);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmittingAddCity = (data: FormData) => {
    addCity({
      id: Math.random(),
      country_id: selectedCountryId,
      title: data.cityName,
      description: data.cityDescription,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleSubmittingAddCity)}>
      {
        !isFormVisible && <div className="form__item-add-btn-wrapper">
          <Button className="form__item-add-btn button" type="button" onClick={handleMakeFormVisible}>Add
            City</Button>
        </div>
      }

      {
        isFormVisible && (
          <div className="form__item-add-city-info">
            <h2 className="form__item-add-city-info-header">Add city:</h2>

            <div className="form__item-add-city-textareas">
                    <textarea cols={33}
                              rows={2}
                              className="form__item-add-city-info-city-name textarea"
                              placeholder="Enter the city name..."
                              {...register("cityName", { required: "City name is required" })}></textarea>
              {errors.cityName && <p>{errors.cityName.message}</p>}
              <textarea
                cols={33}
                rows={5}
                className="form__item-add-city-info-city-description textarea"
                placeholder="Enter description of the city..."
                {...register("cityDescription", { required: "City description is required" })}></textarea>
              {errors.cityDescription && <p>{errors.cityDescription.message}</p>}

            </div>

            <div className="form__item-add-city-buttons">
              <Button type="submit"
                      className="form__item-add-city-btn button">Submit</Button>
              <Button className="form__item-add-city-cancel-btn button transparent"
                      onClick={handleCloseForm}>Cancel</Button>
            </div>
          </div>
        )
      }
    </form>
  );
}