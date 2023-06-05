import { useContext } from "react";
import { AppContext } from "../store";

import { FaGithub } from "react-icons/fa";
const Home = () => {
  const { name } = useContext(AppContext);

  return (
    <div className="container_page mt-10">
      <h1 className="uppercase underline font-semibold">History commits</h1>
      <ul className="z-0 mx-auto w-2/3 relative flex flex-col gap-6 py-10 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:border before:-translate-x-1/2 before:border-slate-200 dark:before:border-gray-600 before:border-dashed  after:absolute after:top-6 after:left-6 after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200 dark:after:border-gray-600 border rounded-lg dark:border-gray-600">
        {[
          ["Display data from API"],
          ["Added navbar and pagination."],
          ["Reusing Styles Tailwind."],
          ["Added Routing feature with React Router DOM and page error."],
          ["Added dark mode feature."],
          ["Manage state global with useContext inside /src/store"],
          ["API configuration file inside /src/config"],
          ["Manage function inside /src/store/Function.jsx"],
          ["Using optional chaining before mapping data"],
          ["Using useLocate to get path url"],
          ["Using regex to validate url parameter"],
          ["Conditional rendering when data not found"],
          ["Added feature sort and filter by all key in page Breeds"],
        ].map((feature) => (
          <li
            className="relative pl-6 border dark:border-slate-600 rounded-r-md flex w-fit py-2 px-6"
            key={feature}
          >
            <div className="flex items-center ">
              <span className="absolute left-0 z-10 flex items-center justify-center w-6 h-6 -translate-x-1/2 rounded-full text-slate-700 ring-2 ring-white dark:ring-gray-500 bg-slate-200  dark:bg-slate-900">
                <FaGithub className="text-lg dark:text-slate-200 " />
              </span>
              <p className="text-sm font-medium">
                {name}{" "}
                <span className="text-slate-600  dark:text-slate-400 font-normal">
                  commit
                </span>{" "}
                <span className="text-slate-600 dark:text-slate-400 font-normal ">
                  "{feature}"
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
