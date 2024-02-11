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
  addCity: (city: ICity) => void;
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
  addCity: () => {
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

  function addCity(newCity: ICity) {
    if (newCity.title.trim().length === 0 || newCity.description.trim().length === 0) {
      console.log("The data must not be empty.");
      return;
    }

    setAllCities(prevCities => {
      return [...prevCities, newCity];
    });

    if (currentCountry?.id === newCity.id) {
      setCurrentCities(prev => [...prev, newCity]);
    }
  }

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
    addCity,
  };

  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
}
