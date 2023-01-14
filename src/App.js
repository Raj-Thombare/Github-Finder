import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import UserContext from "./store/user-context";
import { BASE_URL } from "./store/user-context";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const searchHandler = useCallback(
    async (userInpput) => {
      if (userInpput) {
        const response = await fetch(`${BASE_URL}${userInpput}`);
        const data = await response.json();
        navigate("/user");
        setUserData(data);
      }
    },
    [navigate]
  );

  useEffect(() => {
    searchHandler();
  }, [searchHandler]);

  const userContextValue = {
    data: userData,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home onSearchUser={searchHandler} />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
