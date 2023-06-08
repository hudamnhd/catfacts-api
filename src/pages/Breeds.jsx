import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";
import { Pagination, Table, Loading } from "../components";
import { Error } from "../pages/";
import { useFetchData } from "../utils/dataProcess";
import { useUpdateFilteredData } from "../utils/dataFilter";

const CatBreeds = () => {
  const updateFilteredData = useUpdateFilteredData();
  const fetchData = useFetchData();
  const { page } = useParams();
  const { breedsData, loadingData, handleError } = useContext(AppContext);

  useEffect(() => {
    fetchData(page);
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    updateFilteredData();
  }, [updateFilteredData]);

  return (
    <div className="container_page">
      <h1>Cat Breeds Data from catfacts.ninja</h1>
      {loadingData ? (
        <Loading />
      ) : breedsData?.data.length > 1 ? (
        <Table />
      ) : (
        (handleError && <Error />) || (breedsData?.data.length < 1 && <Error />)
      )}
      <Pagination />
    </div>
  );
};

export default CatBreeds;
