import { useContext, useCallback } from "react";
import { AppContext } from "../context";

export const useUpdateFilteredData = () => {
  const {
    breedsData,
    selectedCountry,
    selectedBreed,
    selectedOrigin,
    selectedCoat,
    selectedPattern,
    sortDirection,
    setFilteredData,
  } = useContext(AppContext);

  const updateFilteredData = useCallback(() => {
    const dataWithIndex = breedsData?.data?.map((item, index) => ({
      ...item,
      index: index + 1,
    }));

    const filtered = dataWithIndex?.filter((item) => {
      return (
        (selectedCountry === "" || item.country === selectedCountry) &&
        (selectedBreed === "" || item.breed === selectedBreed) &&
        (selectedOrigin === "" || item.origin === selectedOrigin) &&
        (selectedCoat === "" || item.coat === selectedCoat) &&
        (selectedPattern === "" || item.pattern === selectedPattern)
      );
    });

    const sortedArray = filtered?.sort((a, b) =>
      sortDirection ? b.index - a.index : a.index - b.index
    );

    setFilteredData(sortedArray);
  }, [
    breedsData,
    selectedCountry,
    selectedBreed,
    selectedOrigin,
    selectedCoat,
    selectedPattern,
    sortDirection,
    setFilteredData,
  ]);

  return updateFilteredData;
};
