import Image from "./Image";
import Loader from "../../assets/loader.gif";

const Spinner = () => {
    return (
      <div className="flex justify-center items-center">
        <Image src={Loader} width="70px" />
      </div>
    );
};

export default Spinner;
