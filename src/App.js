import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { UserContextProvider } from "./contexts/user-context";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:login" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
