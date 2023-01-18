import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-9xl font-extrabold mb-5">404</h1>
      <Link to="/" className="">
        <RiArrowGoBackFill size={50} />
      </Link>
    </div>
  );
};

export default NotFound;
