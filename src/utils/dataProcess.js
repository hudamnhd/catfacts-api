import { useContext, useCallback } from "react";
import { AppContext } from "../context";
import fetchBreedsData from "../config/breedsApi";
import { useNavigate } from "react-router-dom";
export const useFetchData = () => {
  const navigate = useNavigate();
  const {
    regex,
    setHandleError,
    setLoadingData,
    setCurrentPageBreed,
    setBreedsData,
  } = useContext(AppContext);

  const fetchData = useCallback(
    async (page) => {
      if (page === undefined) {
        return navigate("/catbreeds/page-1");
      }

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
          console.log(page === undefined);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoadingData(false);
      }
    },
    [
      regex,
      navigate,
      setHandleError,
      setLoadingData,
      setCurrentPageBreed,
      setBreedsData,
    ]
  );

  return fetchData;
};

export const useBtnFilter = () => {
  const {
    setSelectedBreed,
    setSelectedCountry,
    setSelectedOrigin,
    setSelectedCoat,
    setSelectedPattern,
  } = useContext(AppContext);

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

  return handleResetFilter;
};
