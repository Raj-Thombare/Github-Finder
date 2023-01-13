import HomeContainer from "../components/layouts/HomeContainer";
import HomeIntro from "../components/home/HomeIntro";
import SearchUser from "../components/searchbox/SearchUser";
import Footer from "../components/home/Footer";
import Image from "../components/layouts/Image";
import Logo from "../assets/github-logo.png";

const Home = () => {
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
        <SearchUser />
      </div>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
