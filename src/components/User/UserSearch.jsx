import React, { useState } from "react";

const UserSearch = () => {
  const [text, setText] = useState("");
    const userInputHandler = (e) => {
      setText(e.target.value);
    };

    const formSubmitHandler = (e) => {
      e.preventDefault();
      console.log(text);
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
