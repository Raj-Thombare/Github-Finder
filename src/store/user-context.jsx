import React from "react";

const UserContext = React.createContext({
  data: {},
  loading: false,
  error: false,
});

// export const BASE_URL = "https://api.github.com/users/";
export const BASE_URL = "api.github.com/search/users?q=";

export default UserContext;
