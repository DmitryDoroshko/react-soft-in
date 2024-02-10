import React, { useState } from "react";

import { Button } from "../ui/Button/Button.tsx";

export function AddCityForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleMakeFormVisible = () => {
    setIsFormVisible(prevState => !prevState);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmittingAddCity = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("Submitting...");
  };

  return (
    <form className="form">
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
                    <textarea name="country-name" id="country-name" cols={33} rows={2}
                              className="form__item-add-city-info-city-name textarea"
                              placeholder="Enter the city name..."></textarea>
              <textarea name="city-description" id="city-description" cols={33} rows={5}
                        className="form__item-add-city-info-city-description textarea"
                        placeholder="Enter description of the city..."></textarea>
            </div>

            <div className="form__item-add-city-buttons">
              <Button type="submit" className="form__item-add-city-btn button"
                      onClick={handleSubmittingAddCity}>Submit</Button>
              <Button className="form__item-add-city-cancel-btn button"
                      onClick={handleCloseForm}>Cancel</Button>
            </div>
          </div>
        )
      }
    </form>
  );
}
