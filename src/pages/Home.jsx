import React, { useState, useEffect, useCallback } from "react";
import UserContext from "../store/user-context";
import { BASE_URL } from "../store/user-context";
import HomeContainer from "../components/layouts/HomeContainer";
import HomeIntro from "../components/home/HomeIntro";
import SearchUser from "../components/searchbox/SearchUser";
import Footer from "../components/home/Footer";
import Image from "../components/layouts/Image";
import Logo from "../assets/github-logo.png";

const Home = () => {
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
      <HomeContainer>
        <div>
          <div className="flex flex-row justify-between items-center">
            <HomeIntro />
            <Image
              className="h-auto"
              src={Logo}
              alt="github logo"
              width="350px"
            />
          </div>
          <SearchUser onSearchUser={searchHandler} />
        </div>
        <Footer />
      </HomeContainer>
    </UserContext.Provider>
  );
};

export default Home;
