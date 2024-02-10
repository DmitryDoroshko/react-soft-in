import React, { createContext, useEffect, useState } from "react";
import { ICity, ICountry } from "../types/types.ts";
import { citiesData, countriesData } from "../data/cities-data.ts";

interface ICountriesContext {
  selectedCountryId: string | number;
  setSelectedCountryId: (id: string) => void;
  currentCountries: ICountry[];
  setCurrentCountries: (countries: ICountry[]) => void;
  currentCities: ICity[];
  setCurrentCities: (cities: ICity[]) => void;
  allCities: ICity[];
  setAllCities: (cities: ICity[]) => void;
  onSelectedCountryIdChange: (newSelectedCountryId: string | number) => void;
  currentCountry: ICountry | null;
}

export const CountriesContext = createContext<ICountriesContext>({
  selectedCountryId: countriesData[0].id,
  currentCountry: countriesData[0],
  setSelectedCountryId: () => {
  },
  currentCountries: [],
  setCurrentCountries: () => {
  },
  currentCities: [],
  setCurrentCities: () => {
  },
  allCities: [],
  setAllCities: () => {
  },
  onSelectedCountryIdChange: () => {
  },
});

export function CountriesContextProvider({ children }: { children: React.ReactNode; }) {
  const [currentCountries, setCurrentCountries] = useState(countriesData);
  const [currentCities, setCurrentCities] = useState<ICity[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState(countriesData[0].id);
  const [allCities, setAllCities] = useState(citiesData);

  const [currentCountry, setCurrentCountry] = useState<ICountry | null>(null);

  useEffect(() => {
    const newCurrentCities = allCities.filter(city => city.country_id === selectedCountryId);
    setCurrentCities(newCurrentCities);
  }, [allCities, selectedCountryId]);

  function onSelectedCountryIdChange(newCountryId: string | number) {
    setSelectedCountryId(newCountryId);
    setCurrentCountries(prevCountries => {
      return prevCountries.map(country => {
        if (country.id === newCountryId) {
          return { ...country, isActive: true };
        }

        return { ...country, isActive: false };
      });
    });

    const currentCountryFound = currentCountries.find(country => country.id === newCountryId);

    if (currentCountryFound) {
      setCurrentCountry(currentCountryFound);
      return;
    }

    setCurrentCountry(null);
  }

  const contextValue = {
    currentCountries,
    selectedCountryId,
    currentCities,
    setSelectedCountryId,
    setCurrentCities,
    setCurrentCountries,
    allCities,
    setAllCities,
    onSelectedCountryIdChange,
    currentCountry,
  };

  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
}
