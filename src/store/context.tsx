import React, { createContext, useState } from "react";
import { ICity, ICountry } from "../types/types.ts";
import { citiesData, countriesData } from "../data/cities-data.ts";

interface ICountriesContext {
  selectedCountryId: string | number;
  setSelectedCountryId: (id: string) => void;
  currentCountries: ICountry[];
  setCurrentCountries: (countries: ICountry[]) => void;
  currentCities: ICity[];
  setCurrentCities: (cities: ICity[]) => void;
}

export const CountriesContext = createContext<ICountriesContext>({
  selectedCountryId: countriesData[0].id,
  setSelectedCountryId: () => {
  },
  currentCountries: [],
  setCurrentCountries: () => {
  },
  currentCities: [],
  setCurrentCities: () => {
  },
});

export function CountriesContextProvider({ children }: { children: React.ReactNode; }) {
  const [currentCountries, setCurrentCountries] = useState(countriesData);
  const [currentCities, setCurrentCities] = useState(citiesData);
  const [selectedCountryId, setSelectedCountryId] = useState(countriesData[0].id);

  const contextValue = {
    currentCountries,
    selectedCountryId,
    currentCities,
    setSelectedCountryId,
    setCurrentCities,
    setCurrentCountries,
  };

  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
}
