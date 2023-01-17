import React, { useState, useContext } from "react";
import { BASE_URL } from "../../store/user-context";
import UserContext from "../../store/user-context";

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
      setText("");
    } catch (error) {
      //   console.log(error.message);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex w-7/12 text-xl">
      <input
        type="text"
        onChange={userInputHandler}
        placeholder="Eg. Raj-Thombare"
        className="bg-[#F0F0F0] w-9/12	px-4 py-2 rounded-l-lg focus:outline-none"
      />
      <button className="p-5 sm:p-0 py-2 w-3/12 bg-[#141414] text-[#F0F0F0]  rounded-r-lg hover:bg-gray-600">
        Search
      </button>
    </form>
  );
};

export default UserSearch;
