import { FaGithub } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className="mt-20 flex justify-center">
      <div
        className="
        rounded-xl  relative flex flex-col py-10  pl-6 before:border before:border-dashed before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 
        after:border after:absolute after:top-6 after:bottom-6 after:left-6 after:-translate-x-1/2 border"
      >
        <div className="flex items-center">
          <span className="relative absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full text-slate-700 ring-2 ring-white dark:ring-gray-500 bg-slate-200  dark:bg-slate-900">
            <FaGithub className="text-2xl dark:text-slate-200" />
          </span>
          <h1 className="text_pageError mr-4">Page Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
