import React, { useReducer } from "react";
import UserReducer from "../reducer/user-reducer";

const DataContext = React.createContext({
  users: [],
  user: {},
  repos: [],
  loading: false,
});

export const BASE_URL = "api.github.com/search/users?q=";

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, DataContext);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
