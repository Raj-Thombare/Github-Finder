import Wrapper from "../components/UI/Wrapper";
import UserSearch from "../components/User/UserSearch";
import Footer from "../components/UI/Footer";
import Image from "../components/UI/Image";
import Logo from "../assets/github-logo.png";

const Home = ({ onSearchUser }) => {
  return (
    <Wrapper>
      <div className="justify-start">
        <div className="flex flex-row justify-between items-center">
          <div className="text-left p-1">
            <h1 className="text-7xl font-inter font-bold mb-4">
              GitHub Finder
            </h1>
            <h3 className="text-2xl font-normal">
              Your site to find programmers quickly and easily!
            </h3>
          </div>
          <Image
            className="h-auto"
            src={Logo}
            alt="github logo"
            width="350px"
          />
        </div>
        <UserSearch onSearchUser={onSearchUser} />
      </div>
      {/* {error && <p className="p-2.5 text-lg text-[#141414]">{error}</p>} */}
      <Footer />
    </Wrapper>
  );
};

export default Home;
