import React, { useState, useEffect, useCallback } from "react";
import UserContext from "./store/user-context";
import { BASE_URL } from "./store/user-context";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  const [userData, setUserData] = useState({});

  const searchHandler = useCallback((userInpput) => {
    fetch(`${BASE_URL}${userInpput}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
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
