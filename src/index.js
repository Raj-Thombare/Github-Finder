import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from "./store/user-context";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);


