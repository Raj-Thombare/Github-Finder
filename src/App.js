import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
