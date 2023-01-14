import React from "react";

const UserContext = React.createContext({
  data: {},
  loading: false,
  error: false,
});

export const BASE_URL = "https://api.github.com/users/";

export default UserContext;
