import { useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Profile } from "../components/";
import { AppContext } from "../store";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    name,
    toggle,
    setToggle,
    theme,
    setTheme,
    active,
    setActive,
    setProfileVisible,
    currentPageBreed,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = "Cat Breeds";
    if (location.pathname === "/catbreeds/") {
      navigate(location.pathname + "page-1");
    }

    const pathname = location.pathname;
    if (pathname.startsWith("/catbreeds")) {
      setActive("Breeds");
    } else {
      setActive("Home");
    }
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav>
      <div className="py-1">
        {[
          ["Home", "/"],
          ["Breeds", `/catbreeds/page-${currentPageBreed}`],
        ].map(([title, url]) => (
          <Link
            key={url}
            to={url}
            className={` ${
              active === title && "border-b-4 border-indigo-400"
            } nav_button`}
            onClick={() => setActive(title)}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="flex">
        <div
          onClick={() => {
            setToggle(!toggle);
            setProfileVisible(true);
          }}
          className="user_box"
        >
          <FaGithub className="text-xl dark:text-slate-200" />
          <p className="font-semibold dark:text-slate-200">{name}</p>
        </div>
        <span className="border-x mx-2"></span>
        <button
          className="darkmode_button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <FaMoon />
          ) : (
            <FaSun className="dark:text-slate-200" />
          )}
        </button>
      </div>
      {toggle === true && <Profile />}
    </nav>
  );
};

export default Navbar;
