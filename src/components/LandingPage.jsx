import logo from "../assets/github-logo.png";

const LandingPage = () => {
  return (
    <div className="my-2 mx-40 p-2 flex items-center justify-between">
      <div className="text-left p-1">
        <h1 className="text-7xl font-inter font-bold mb-4">GitHub Finder</h1>
        <h3 className="text-2xl font-normal">
          Your site to find programmers quickly and easily!
        </h3>
      </div>
      <div className="h-80">
        <img className="h-full" src={logo} alt="github logo" />
      </div>
    </div>
  );
};

export default LandingPage;
