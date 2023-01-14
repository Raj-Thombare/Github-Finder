import { useRef } from "react";

const InputForm = ({ onSearchUser }) => {
  const inputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const text = inputRef.current.value;
    // onGetUserInput(text);
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex w-7/12 text-xl">
      <input
        type="text"
        ref={inputRef}
        placeholder="Eg. Raj-Thombare"
        className="bg-[#F0F0F0] w-9/12	px-4 py-2 rounded-l-lg focus:outline-none"
      />
      <button
        onClick={() => onSearchUser(inputRef.current.value)}
        className="p-5 sm:p-0 py-2 w-3/12 bg-[#141414] text-[#F0F0F0]  rounded-r-lg hover:bg-gray-600"
      >
        Search
      </button>
    </form>
  );
};

export default InputForm;
