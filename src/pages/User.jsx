import React, { useContext } from "react";
import UserContext from "../store/user-context";

const User = () => {
  const userCtx = useContext(UserContext);

  return <div>{userCtx.data.name}</div>;
};

export default User;
