import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/user-context";

const Home = React.lazy(() => import("./pages/Home"));
const User = React.lazy(() => import("./pages/User"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Suspense fallback={<div class="lds-hourglass"></div>}>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:login" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContextProvider>
    </Suspense>
  );
};

export default App;
