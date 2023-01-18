import { BASE_URL } from "../adapters/api";

export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await fetch(`${BASE_URL}/search/users?${params}`);
  const users = await response.json();
  return users;
};

export const getUser = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  if (response.status === 404) {
    window.location = "/404";
  } else {
    const user = await response.json();
    return user;
  }
};

export const getRepos = async (username) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await fetch(`${BASE_URL}/users/${username}/repos?${params}`);
  const repoData = await response.json();
  return repoData;
};
