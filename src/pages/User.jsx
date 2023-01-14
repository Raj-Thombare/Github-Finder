import React, { useContext } from "react";
import UserContext from "../store/user-context";

const User = () => {
  const repoCtx = useContext(UserContext);
  console.log(repoCtx.name);
  return <div>User Data!</div>;
};

export default User;
