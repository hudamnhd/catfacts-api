const Dropdown = ({ selectedFilter, setSelectedFilter, options }) => {
  return (
    <select
      value={selectedFilter}
      onChange={(e) => setSelectedFilter(e.target.value)}
    >
      <option
        className={selectedFilter === "" ? "text-center" : "text-start"}
        value=""
      >
        *
      </option>
      {options.map((options) => (
        <option
          key={options}
          value={options}
          className={` ${options === "" ? "hidden" : null} ${
            selectedFilter === options ? "text-center" : "text-start"
          }`}
        >
          {selectedFilter === options ? `( ${options} )` : options}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
