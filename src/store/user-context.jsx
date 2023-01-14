import React from "react";

const UserContext = React.createContext({
  data: {},
});

export const BASE_URL = "https://api.github.com/users/";

export default UserContext;
