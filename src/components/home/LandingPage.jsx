import HomeContainer from "../layouts/HomeContainer";
import Image from "../layouts/Image";
import logo from "../assets/github-logo.png";

const LandingPage = () => {
  return (
    <HomeContainer>
      <div className="text-left p-1">
        <h1 className="text-7xl font-inter font-bold mb-4">GitHub Finder</h1>
        <h3 className="text-2xl font-normal">
          Your site to find programmers quickly and easily!
        </h3>
      </div>
      <Image className="h-auto" src={logo} alt="github logo" width="350px" />
    </HomeContainer>
  );
};

export default LandingPage;
