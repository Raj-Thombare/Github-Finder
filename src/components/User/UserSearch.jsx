import React, { useState, useContext } from "react";
import { searchUsers } from "../../adapters/index";
import UserContext from "../../contexts/user-context";
import { FiSearch } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserSearch = ({ onScroll }) => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(UserContext);

  const notify = () => toast("Please Enter Username!");

  const userInputHandler = async (e) => {
    setText(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      notify();
      dispatch({ type: "GET_USERS", payload: [] });
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users.items });
      onScroll();
      setText("");
    }
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="flex flex-col items-center w-[100%] md:w-7/12 text-xl md:flex-row"
    >
      <div className="flex flex-row  bg-[#F0F0F0] md:items-end md:pl-[8px] mb-5 md:mb-0 text-[28px] md:text-[100%] w-[100%] md:w-[100%] p-3 md:p-0	md:px-4 md:py-2 rounded-l-lg rounded-r-lg md:rounded-r-none md:rounded-l-lg focus:outline-none">
        <FiSearch size={30} className="mr-[5px] py-1" />
        <input
          type="search"
          onChange={userInputHandler}
          value={text}
          placeholder="Raj-Thombare"
          className="bg-[#F0F0F0] md:w-[90%] md:mb-0 text-[22px] md:text-[90%] w-[100%] md:p-0 md:px-0 md:py-0 rounded-l-lg rounded-r-lg md:rounded-r-none md:rounded-l-lg focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="p-3 md:py-2 w-[100%] font-bold md:font-normal text-[22px] md:text-[20px] md:w-3/12 bg-[#141414] text-[#F0F0F0] rounded-r-lg rounded-l-lg md:rounded-r-lg md:rounded-l-none "
      >
        Search
      </button>
      <ToastContainer />
    </form>
  );
};

export default UserSearch;
