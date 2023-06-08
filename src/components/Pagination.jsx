import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

const Pagination = () => {
  const { prevPage, nextPage, breedsData, setCurrentPageBreed } =
    useContext(AppContext);

  return (
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
  );
};

export default Pagination;
