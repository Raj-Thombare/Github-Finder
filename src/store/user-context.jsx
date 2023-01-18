import React, { useReducer } from "react";
import UserReducer from "../context/user-reducer";

const UserContext = React.createContext({
  users: [],
  user: {},
  repos: [],
  loading: false,
});

export const BASE_URL = "https://api.github.com";

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, UserContext);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
