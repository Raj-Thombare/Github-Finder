import React, { useState, useContext } from "react";
import { BASE_URL } from "../../store/user-context";
import UserContext from "../../store/user-context";
import { FiSearch } from "react-icons/fi";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(UserContext);

  const userInputHandler = (e) => {
    setText(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch({ type: "SET_LOADING" });
      const response = await fetch(`${BASE_URL}${text}`);
      const users = await response.json();
      dispatch({ type: "GET_USERS", payload: users.items });
      // setText("");
    } catch (error) {
      console.log(error.message);
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
          placeholder="Raj-Thombare"
          className="bg-[#F0F0F0] md:w-[90%] md:mb-0 text-[22px] md:text-[90%] w-[100%] md:p-0 md:px-0 md:py-0 rounded-l-lg rounded-r-lg md:rounded-r-none md:rounded-l-lg focus:outline-none"
        />
      </div>
      <button className="p-3 md:py-2 w-[100%] font-bold md:font-normal text-[22px] md:text-[20px] md:w-3/12 bg-[#141414] text-[#F0F0F0] rounded-r-lg rounded-l-lg md:rounded-r-lg md:rounded-l-none ">
        Search
      </button>
    </form>
  );
};

export default UserSearch;
