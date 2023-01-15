import { Link } from "react-router-dom";
import Image from "../UI/Image";

const UserItem = ({ name, avatar }) => {
  return (
    <div className="card compact side bg-base-100">
      <div className="flex flex-row my-4 p-3 rounded-xl w-64 justify-start items-center shadow-md">
        <div className="mr-5 ml-3 rounded-full shadow">
          <Image
            src={avatar}
            className="rounded-full w-14"
            alt={`${name}'s avatar`}
          />
        </div>
        <div>
          <h2 className="font-semibold text-xl">{name}</h2>
          <Link to={`/user/${name}`} className="text-black/50 text-sm">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
