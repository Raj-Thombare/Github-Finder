import React, { useContext } from "react";
import UserItem from "./UserItem";
import UserContext from "../../contexts/user-context";
import Spinner from "../UI/Spinner";

const UserList = () => {
  const { users, loading } = useContext(UserContext);

  if (!loading) {
    return (
      <div className="mt-6 mb-10 grid grid-cols-1 gap-8 place-items-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {users?.map((user) => {
          return (
            <UserItem
              key={user.id}
              name={user.login}
              avatar={user.avatar_url}
            />
          );
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserList;
