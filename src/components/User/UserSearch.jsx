import React, { useState } from "react";
import { BASE_URL } from "../../store/user-context";

const UserSearch = () => {
  const [text, setText] = useState("");
  const [userData, setUserData] = useState([]);

  const userInputHandler = (e) => {
    setText(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}${text}`);
    const data = await response.json();
    setUserData(data.items);
    console.log(userData);
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
