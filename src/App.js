import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import UserContext from "./store/user-context";
import { BASE_URL } from "./store/user-context";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const searchHandler = useCallback(
    async (userInpput) => {
      if (userInpput) {
        setLoading(true);
        try {
          const response = await fetch(`${BASE_URL}${userInpput}`);
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }

          const data = await response.json();

          navigate("/user");
          setUserData(data);
        } catch (error) {
          setError(error.message);
        }
        setLoading(true);
      }
    },
    [navigate]
  );

  useEffect(() => {
    searchHandler();
  }, [searchHandler]);

  const userContextValue = {
    data: userData,
    loading: loading,
    error: error,
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
