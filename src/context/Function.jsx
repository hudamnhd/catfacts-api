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
