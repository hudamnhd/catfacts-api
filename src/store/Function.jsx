// functions fetch data , reset button , filter button
import { useContext, useCallback } from "react";
import { AppContext } from "./index";
import { fetchBreedsData } from "../config/APIConfig";

export const useFetchData = () => {
  const {
    regex,
    setHandleError,
    setLoadingData,
    setCurrentPageBreed,
    setBreedsData,
    setSelectedBreed,
    setSelectedCountry,
    setSelectedOrigin,
    setSelectedCoat,
    setSelectedPattern,
  } = useContext(AppContext);

  const fetchData = useCallback(
    async (page) => {
      try {
        if (regex.test(page)) {
          const pageNumber = parseInt(page.replace("page-", ""));
          setHandleError(false);
          setLoadingData(true);
          setCurrentPageBreed(pageNumber);
          const data = await fetchBreedsData(pageNumber);
          setBreedsData(data);
        } else {
          setHandleError(true);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoadingData(false);
      }
    },
    [regex, setHandleError, setLoadingData, setCurrentPageBreed, setBreedsData]
  );

  const handleResetFilter = useCallback(() => {
    setSelectedBreed("");
    setSelectedCountry("");
    setSelectedOrigin("");
    setSelectedCoat("");
    setSelectedPattern("");
  }, [
    setSelectedBreed,
    setSelectedCountry,
    setSelectedOrigin,
    setSelectedCoat,
    setSelectedPattern,
  ]);

  return { fetchData, handleResetFilter };
};

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

    // Rest of your code to update filtered data
    const filtered = dataWithIndex?.filter((item) => {
      // Filter berdasarkan negara
      const filterByCountry =
        selectedCountry === "" ? true : item.country === selectedCountry;
      // Filter berdasarkan breed
      const filterByBreed =
        selectedBreed === "" ? true : item.breed === selectedBreed;
      // Filter berdasarkan origin
      const filterByOrigin =
        selectedOrigin === "" ? true : item.origin === selectedOrigin;
      // Filter berdasarkan coat
      const filterByCoat =
        selectedCoat === "" ? true : item.coat === selectedCoat;
      // Filter berdasarkan pattern
      const filterByPattern =
        selectedPattern === "" ? true : item.pattern === selectedPattern;
      // Mengembalikan nilai true hanya jika semua filter terpenuhi
      return (
        filterByCountry &&
        filterByBreed &&
        filterByOrigin &&
        filterByCoat &&
        filterByPattern
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
