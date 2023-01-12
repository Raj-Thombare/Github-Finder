import logo from "./assets/github-logo.png";

function App() {
  return (
    <div className="my-2 mx-20 p-2 flex">
      <div>
        <h1 className="text-6xl font-inter font-bold">Github Finder</h1>
        <h3 className="text-xl font-normal">
          Your site to find programmers quickly and easily!
        </h3>
      </div>
      <div className="h-100">
        <img className="h-full" src={logo} alt="github logo" />
      </div>
    </div>
  );
}

export default App;
