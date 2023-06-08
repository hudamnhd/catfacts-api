import { useContext } from "react";
import { Dropdown } from "../components";
import { AppContext } from "../context";
import { useBtnFilter } from "../utils/dataProcess";
import { FaSortUp, FaSortDown } from "react-icons/fa";

const Table = () => {
  const handleResetFilter = useBtnFilter();
  const {
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
    breedOptions,
    countryOptions,
    originOptions,
    coatOptions,
    patternOptions,
  } = useContext(AppContext);

  return (
    <div className="h-[517px] overflow-auto ring-2 ring-slate-400 dark:ring-slate-600">
      <table>
        <thead className="sticky top-0 ring-2 ring-slate-400">
          <tr>
            <th className="w-[5%]">
              No
              <button
                className="block mx-auto"
                onClick={() => setSortDirection(!sortDirection)}
              >
                {sortDirection ? <FaSortUp /> : <FaSortDown />}
              </button>
            </th>
            <th>
              Breed
              <Dropdown
                selectedFilter={selectedBreed}
                setSelectedFilter={setSelectedBreed}
                options={breedOptions}
              />
            </th>

            <th>
              Country
              <Dropdown
                selectedFilter={selectedCountry}
                setSelectedFilter={setSelectedCountry}
                options={countryOptions}
              />
            </th>
            <th>
              Origin
              <Dropdown
                selectedFilter={selectedOrigin}
                setSelectedFilter={setSelectedOrigin}
                options={originOptions}
              />
            </th>

            <th>
              Coat
              <Dropdown
                selectedFilter={selectedCoat}
                setSelectedFilter={setSelectedCoat}
                options={coatOptions}
              />
            </th>
            <th>
              Pattern
              <Dropdown
                selectedFilter={selectedPattern}
                setSelectedFilter={setSelectedPattern}
                options={patternOptions}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.length >= 1 ? (
            filteredData?.map((item) => (
              <tr
                className={
                  item.index % 2 === 0 ? "bg-slate-100 dark:bg-slate-800" : ""
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
              <td colSpan="6" className="text-center border-none">
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
    </div>
  );
};

export default Table;
