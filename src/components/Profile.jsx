import { useContext, useEffect } from "react";
import { AppContext } from "../store";
import { FaSave } from "react-icons/fa";

const Profile = () => {
  const {
    setName,
    inputName,
    inputFocus,
    setInputName,
    setToggle,
    isProfileVisible,
  } = useContext(AppContext);

  useEffect(() => {
    if (isProfileVisible) {
      inputFocus.current.focus();
    }
    // eslint-disable-next-line
  }, [isProfileVisible]);

  const saveName = (e) => {
    e.preventDefault();
    if (!inputName || inputName.length < 3) {
      return alert("Input Name..!");
    }
    setName(inputName);
  };

  return (
    <div onMouseLeave={() => setToggle(false)} className="profile_box">
      <form className="flex flex-col space-y-1" onSubmit={saveName}>
        <label htmlFor="name" className="italic dark:text-slate-200">
          Name :
        </label>
        <div className="flex items-center space-x-1">
          <input
            placeholder="Change your name"
            className="profile_input"
            onChange={(e) => setInputName(e.target.value)}
            ref={inputFocus}
          />
          <button type="submit" className="profile_button">
            <FaSave className="dark:text-slate-200" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
