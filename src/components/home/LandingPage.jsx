import HomeContainer from "../layouts/HomeContainer";
import HomeIntro from "./HomeIntro";
import Image from "../layouts/Image";
import logo from "../assets/github-logo.png";

const LandingPage = () => {
  return (
    <HomeContainer>
      <HomeIntro />
      <Image className="h-auto" src={logo} alt="github logo" width="350px" />
    </HomeContainer>
  );
};

export default LandingPage;
