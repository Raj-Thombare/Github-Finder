import React, { useReducer } from "react";
import UserReducer from "../reducer/user-reducer";

const UserContext = React.createContext({
  users: [],
  user: {},
  repos: [],
  loading: false,
});

export const BASE_URL = "api.github.com/search/users?q=";

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, UserContext);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
