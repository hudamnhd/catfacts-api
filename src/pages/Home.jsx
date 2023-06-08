import { useContext } from "react";
import { AppContext } from "../context";
import pageTitle from "../utils/pageTitle";

import { FaGithub } from "react-icons/fa";
const Home = () => {
  pageTitle("Home");
  const { name } = useContext(AppContext);

  return (
    <div className="container_page">
      <h1 className="underline">History commits</h1>
      <ul className="main_feed">
        {[
          ["Display data from API"],
          ["Added navbar and pagination."],
          ["Reusing Styles Tailwind."],
          ["Added Routing feature with React Router DOM and page error."],
          ["Added dark mode feature."],
          ["Manage state global with useContext inside /src/context"],
          ["API configuration file inside /src/config"],
          ["Manage function inside /src/utils"],
          ["Using optional chaining before mapping data"],
          ["Using useLocate to get path url"],
          ["Using regex to validate url parameter"],
          ["Conditional rendering when data not found"],
          ["Added feature sort and filter by all key in page Breeds"],
        ].map((feature) => (
          <li className="sub_feed" key={feature}>
            <div className="flex items-center ">
              <span className="span_feed">
                <FaGithub className="text-lg dark:text-slate-200 " />
              </span>
              <p className="text-sm font-medium">
                {name}{" "}
                <span className="text-slate-600  dark:text-slate-400">
                  commit
                </span>
                <span className="text-slate-600 dark:text-slate-400">
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
