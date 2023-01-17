import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-6 bg-white md:sticky top-0 shadow-md flex flex-row justify-between items-center">
      <div className="text-4xl font-bold">GitHub Finder</div>
      <Link
        to="/"
        className="bg-[#f0f0f0] px-3 py-1 text-lg rounded font-bold hidden md:block hover:opacity-75"
      >
        Go to Home
      </Link>
      <Link
        to="/"
        className="bg-[#f0f0f0] px-3 py-1 text-lg rounded font-bold block md:hidden hover:opacity-75"
      >
        Home
      </Link>
    </div>
  );
};

export default Navbar;
