import React, { useContext } from "react";
import UserContext from "../../store/user-context";

const UserList = () => {
  const usersCtx = useContext(UserContext);
  return (
    <div>
      {usersCtx.map((user) => {
        return <p>{user.login}</p>;
      })}
    </div>
  );
};

export default UserList;
