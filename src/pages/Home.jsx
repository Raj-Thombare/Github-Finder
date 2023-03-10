import { useRef } from "react";
import Wrapper from "../components/UI/Wrapper";
import UserSearch from "../components/User/UserSearch";
import Footer from "../components/UI/Footer";
import Image from "../components/UI/Image";
import Logo from "../assets/github-logo.png";
import UserList from "../components/User/UserList";

const Home = ({ onSearchUser }) => {
  const userListRef = useRef(null);

  const scrollHandler = () => {
    userListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className="justify-start px-8 md:px-0">
        <div className="flex justify-between items-center flex-col-reverse mb-9 md:flex-row ">
          <div className="text-center md:text-left p-1">
            <h1 className="text-7xl font-inter font-bold mb-4">
              GitHub Finder
            </h1>
            <h3 className="text-2xl font-inter font-normal mt-30 mx-4 md:mx-0">
              Your site to find programmers quickly and easily!
            </h3>
          </div>
          <Image
            className="h-auto w-[250px] md:w-[350px]"
            src={Logo}
            alt="github logo"
            width="350px"
          />
        </div>
        <UserSearch onSearchUser={onSearchUser} onScroll={scrollHandler} />
      </div>
      <UserList />
      <Footer ref={userListRef} />
    </Wrapper>
  );
};

export default Home;
