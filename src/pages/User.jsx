import React, { useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../store/user-context";

const User = () => {
  const { user, dispatch } = useContext(UserContext);

  const { login } = useParams();

  const getUserData = useCallback(
    async (login) => {
      dispatch({ type: "SET_LOADING" });
      const response = await fetch(`https://api.github.com/users/${login}`);
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    getUserData(login);
  }, [login, getUserData]);

  return <div>{login}</div>;
};

export default User;
