import React, { useState, useEffect } from "react";

const userContext = React.createContext({
  data: {},
});

const BASE_URL = "https://api.github.com/users/";

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}awesomeab`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const userContextValue = {
    data: userData,
  };

  return (
    <userContext.Provider value={userContextValue}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
