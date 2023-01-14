import React, { useState, useEffect, useCallback } from "react";
import UserContext from "./store/user-context";
import { BASE_URL } from "./store/user-context";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  const [userData, setUserData] = useState({});

  const searchHandler = useCallback(async (userInpput) => {
    if (userInpput) {
      const response = await fetch(`${BASE_URL}${userInpput}`);
      const data = await response.json();
      setUserData(data);
    }
  }, []);

  useEffect(() => {
    searchHandler();
  }, [searchHandler]);

  const userContextValue = {
    data: userData,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <Home onSearchUser={searchHandler} />
      <User />
    </UserContext.Provider>
  );
}

export default App;
