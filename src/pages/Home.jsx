import { useContext } from "react";
import UserContext from "../store/user-context";

import HomeContainer from "../components/layout/HomeContainer";
import HomeIntro from "../components/home/HomeIntro";
import SearchUser from "../components/searchbox/SearchUser";
import Footer from "../components/home/Footer";
import Image from "../components/layout/Image";
import Logo from "../assets/github-logo.png";

const Home = ({ onSearchUser }) => {
  const { error } = useContext(UserContext);

  return (
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
        <SearchUser onSearchUser={onSearchUser} />
        {error && <p className="p-2.5 text-lg text-[#141414]">{error}</p>}
      </div>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
