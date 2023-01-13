import HomeContainer from "../layouts/HomeContainer";
import HomeIntro from "./HomeIntro";
import SearchUser from "../searchbox/SearchUser";
import Image from "../layouts/Image";
import logo from "../assets/github-logo.png";

const LandingPage = () => {
  return (
    <HomeContainer>
      <div className="flex flex-row justify-between items-center">
        <HomeIntro />
        <Image className="h-auto" src={logo} alt="github logo" width="350px" />
      </div>
      <SearchUser />
    </HomeContainer>
  );
};

export default LandingPage;
