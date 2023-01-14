import React, { useContext } from "react";
import UserContext from "../store/user-context";

const User = () => {
  const repoCtx = useContext(UserContext);
  console.log(repoCtx.repos_url);
  return <div>User Repositories!</div>;
};

export default User;
