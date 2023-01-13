import React from "react";

export const userData = React.createContext({
  data: {},
});

const userDataProvider = ({ children }) => {
  return <userData.Provider>{children}</userData.Provider>;
};
