import InputForm from "./InputForm";

const SearchUser = ({ onGetUserInput, onSearchUser }) => {
  return (
    <div>
      <h3 className="mb-3 p-1 text-xl">Enter Developer Username below :</h3>
      <InputForm onGetUserInput={onGetUserInput} onSearchUser={onSearchUser} />
    </div>
  );
};

export default SearchUser;