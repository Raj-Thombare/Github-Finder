import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="p-6 bg-white md:sticky top-0 shadow-md flex flex-row justify-between items-center">
      <div className="text-4xl font-bold">GitHub Finder</div>
      <Link to="/" className="px-3 py-1 hidden md:block hover:opacity-75">
        <RiArrowGoBackFill size={25} />
      </Link>
      <Link to="/" className="px-3 py-1 block md:hidden hover:opacity-75">
        <RiArrowGoBackFill size={30} />
      </Link>
    </div>
  );
};

export default Navbar;
