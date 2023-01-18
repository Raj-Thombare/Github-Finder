import React, { useReducer } from "react";
import UserReducer from "../reducers/user-reducer";

const UserContext = React.createContext({
  users: [],
  user: {},
  repos: [],
  loading: false,
});

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, UserContext);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
