import { useContext } from "react";
import userContext from "./store/user-context";

import Home from "./pages/Home";

function App() {
  const userCtx = useContext(userContext);
  console.log(userCtx.data);
  return <Home />;
}

export default App;
