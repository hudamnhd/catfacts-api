import React, { createContext, useState, useRef, useEffect } from "react";
import { getUniqueOptions } from "../utils/helper";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("hudamnhd");
  const [inputName, setInputName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [active, setActive] = useState(null);
  const [breedsData, setBreedsData] = useState(null);
  const [currentPageBreed, setCurrentPageBreed] = useState(1);
  const [loadingData, setLoadingData] = useState(false);
  const [handleError, setHandleError] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedCoat, setSelectedCoat] = useState("");
  const [selectedPattern, setSelectedPattern] = useState("");
  const [sortDirection, setSortDirection] = useState(false);
  const inputFocus = useRef(null);
  const regex = /^page-\d+$/;
  const prevPage =
    currentPageBreed !== breedsData?.from && currentPageBreed - 1;
  const nextPage =
    currentPageBreed !== breedsData?.last_page && currentPageBreed + 1;
  const breedOptions = getUniqueOptions(breedsData?.data, "breed");
  const countryOptions = getUniqueOptions(breedsData?.data, "country");
  const originOptions = getUniqueOptions(breedsData?.data, "origin");
  const coatOptions = getUniqueOptions(breedsData?.data, "coat");
  const patternOptions = getUniqueOptions(breedsData?.data, "pattern");

  useEffect(() => {
    const classDark = document.documentElement.classList;
    theme === "dark" ? classDark.add("dark") : classDark.remove("dark");
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        theme,
        inputName,
        setInputName,
        toggle,
        setToggle,
        setTheme,
        active,
        setActive,
        breedsData,
        setBreedsData,
        currentPageBreed,
        setCurrentPageBreed,
        loadingData,
        setLoadingData,
        handleError,
        setHandleError,
        isProfileVisible,
        setProfileVisible,
        filteredData,
        setFilteredData,
        selectedCountry,
        setSelectedCountry,
        selectedBreed,
        setSelectedBreed,
        selectedOrigin,
        setSelectedOrigin,
        selectedCoat,
        setSelectedCoat,
        selectedPattern,
        setSelectedPattern,
        inputFocus,
        regex,
        prevPage,
        nextPage,
        sortDirection,
        setSortDirection,
        breedOptions,
        countryOptions,
        originOptions,
        coatOptions,
        patternOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
