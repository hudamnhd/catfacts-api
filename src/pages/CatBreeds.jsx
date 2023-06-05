import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../store";
import { useFetchData, useUpdateFilteredData } from "../store/Function";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import ErrorPage from "./ErrorPage";

const CatBreeds = () => {
  const { fetchData, handleResetFilter } = useFetchData();
  const updateFilteredData = useUpdateFilteredData();
  const { page } = useParams();

  const {
    prevPage,
    nextPage,
    breedsData,
    setCurrentPageBreed,
    loadingData,
    handleError,
    filteredData,
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
    sortDirection,
    setSortDirection,
  } = useContext(AppContext);

  useEffect(() => {
    fetchData(page);
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    updateFilteredData();
  }, [updateFilteredData]);

  return (
    <div className="container_page mt-10">
      <h1 className="uppercase font-bold">
        Cat Breeds Data from catfacts.ninja{" "}
      </h1>
      <div className=" relative overflow-auto w-full h-[517px]">
        {loadingData ? (
          <h3 className="text-xl text-center font-medium">
            Load data from server ...
          </h3>
        ) : breedsData?.data.length > 1 ? (
          <table className="table-auto mx-auto">
            <thead>
              <tr>
                <th className="text-center w-[5%]">
                  No
                  <button
                    className="block mx-auto"
                    onClick={() => setSortDirection(!sortDirection)}
                  >
                    {sortDirection ? <FaSortUp /> : <FaSortDown />}
                  </button>
                </th>
                <th className="">
                  Breed
                  <select
                    className="font-thin dark:hover:text-slate-400 h-fit focus:outline-none cursor-pointer"
                    value={selectedBreed}
                    onChange={(e) => setSelectedBreed(e.target.value)}
                  >
                    <option
                      className={
                        selectedBreed === "" ? "text-center" : "text-start"
                      }
                      value=""
                    >
                      *
                    </option>
                    {Array.from(
                      new Set(breedsData?.data?.map((item) => item.breed))
                    ).map((breed) => (
                      <option
                        key={breed}
                        value={breed}
                        className={
                          selectedBreed === breed ? "text-center" : "text-start"
                        }
                      >
                        {selectedBreed === breed ? `( ${breed} )` : breed}
                      </option>
                    ))}
                  </select>
                </th>

                <th>
                  Country
                  <select
                    className="flex font-thin  dark:hover:text-slate-400 h-fit focus:outline-none cursor-pointer"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option
                      className={
                        selectedCountry === "" ? "text-center" : "text-start"
                      }
                      value=""
                    >
                      *
                    </option>
                    {/* Daftar negara dari data */}
                    {Array.from(
                      new Set(breedsData?.data?.map((item) => item.country))
                    ).map((country) => (
                      <option
                        key={country}
                        value={country}
                        className={`${country === "" ? "hidden" : null} ${
                          selectedCountry === country
                            ? "text-center"
                            : "text-start"
                        }`}
                      >
                        {selectedCountry === country
                          ? `( ${
                              country.includes("(")
                                ? country.split("(")[0].trim()
                                : country
                            } )`
                          : country.includes("(")
                          ? country?.split("(")[0].trim()
                          : country}
                      </option>
                    ))}
                  </select>
                </th>
                <th>
                  Origin
                  <select
                    className="flex flex-1 font-thin  dark:hover:text-slate-400 h-fit focus:outline-none cursor-pointer"
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                  >
                    <option
                      className={
                        selectedOrigin === "" ? "text-center" : "text-start"
                      }
                      value=""
                    >
                      *
                    </option>
                    {Array.from(
                      new Set(breedsData?.data?.map((item) => item.origin))
                    ).map((origin) => (
                      <option
                        key={origin}
                        value={origin}
                        className={`${origin === "" ? "hidden" : null} ${
                          selectedOrigin === origin
                            ? "text-center"
                            : "text-start"
                        }`}
                      >
                        {selectedOrigin === origin ? `( ${origin} )` : origin}
                      </option>
                    ))}
                  </select>
                </th>

                <th>
                  Coat
                  <select
                    className="flex flex-1 font-thin  dark:hover:text-slate-400 h-fit focus:outline-none cursor-pointer"
                    value={selectedCoat}
                    onChange={(e) => setSelectedCoat(e.target.value)}
                  >
                    <option
                      className={
                        selectedOrigin === "" ? "text-center" : "text-start"
                      }
                      value=""
                    >
                      *
                    </option>
                    {Array.from(
                      new Set(breedsData?.data?.map((item) => item.coat))
                    ).map((coat) => (
                      <option
                        key={coat}
                        value={coat}
                        className={`${coat === "" ? "hidden" : null} ${
                          selectedOrigin === coat ? "text-center" : "text-start"
                        }`}
                      >
                        {selectedCoat === coat ? `( ${coat} )` : coat}
                      </option>
                    ))}
                  </select>
                </th>
                <th>
                  Pattern
                  <select
                    className="flex flex-1 font-thin  dark:hover:text-slate-400 h-fit focus:outline-none cursor-pointer"
                    value={selectedPattern}
                    onChange={(e) => setSelectedPattern(e.target.value)}
                  >
                    <option
                      className={
                        selectedPattern === "" ? "text-center" : "text-start"
                      }
                      value=""
                    >
                      *
                    </option>
                    {Array.from(
                      new Set(breedsData?.data?.map((item) => item.pattern))
                    ).map((pattern) => (
                      <option
                        key={pattern}
                        value={pattern}
                        className={`${pattern === "" ? "hidden" : null} ${
                          selectedPattern === pattern
                            ? "text-center"
                            : "text-start"
                        }`}
                      >
                        {selectedPattern === pattern
                          ? `( ${pattern} )`
                          : pattern}
                      </option>
                    ))}
                  </select>
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {filteredData?.length >= 1 ? (
                filteredData?.map((item) => (
                  <tr
                    className={
                      item.index % 2 === 0
                        ? "bg-slate-100 dark:bg-slate-800"
                        : ""
                    }
                    key={item.breed}
                  >
                    <td className="text-center">{item.index}</td>
                    <td>{item.breed}</td>
                    <td>
                      {item.country.includes("(")
                        ? item.country.split("(")[0].trim()
                        : item.country}
                    </td>
                    <td>{item.origin}</td>
                    <td>{item.coat}</td>
                    <td>{item.pattern}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    Data not found{" "}
                    <button
                      className="underline font-bold text-red-500"
                      onClick={handleResetFilter}
                    >
                      Reset
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          (handleError && <ErrorPage />) ||
          (breedsData?.data.length < 1 && <ErrorPage />)
        )}
      </div>
      <div className={`${!breedsData && "hidden"} my-4 flex justify-center`}>
        <div className="flex border-b border-slate-400">
          <Link
            className="pagination"
            to={prevPage ? `/catbreeds/page-${prevPage}` : "#"}
            onClick={() => prevPage && setCurrentPageBreed(prevPage)}
          >
            Prev
          </Link>
          {breedsData?.links?.map((item, index) => {
            const isHidden = item.label === "Previous" || item.label === "Next";
            const isActive = "border-b-[3px] border-indigo-500";

            return (
              <Link
                key={index}
                to={`/catbreeds/page-${item.label}`}
                onClick={() => setCurrentPageBreed(Number(item.label))}
                className={`pagination ${item.active && isActive}
                  ${isHidden && "hidden"} 
                `}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className="pagination"
            to={nextPage ? `/catbreeds/page-${nextPage}` : "#"}
            onClick={() => nextPage && setCurrentPageBreed(nextPage)}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatBreeds;
