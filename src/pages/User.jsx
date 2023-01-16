import React, { useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../store/user-context";
import RepoList from "../components/Repo/RepoList";

const User = () => {
  const { dispatch, user } = useContext(UserContext);

  const { login } = useParams();

  const getUserData = useCallback(
    async (login) => {
      dispatch({ type: "SET_LOADING" });
      const response = await fetch(`https://api.github.com/users/${login}`);
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: {
          name: data.name,
          username: data.login,
          location: data.location,
          twitter: data.twitter_username,
          public_repos: data.public_repos,
          repos_url: data.repos_url,
          follower: data.followers,
          following: data.following,
          company: data.company,
          avatar: data.avatar_url,
          github_url: data.html_url,
        },
      });
    },
    [dispatch]
  );

  const repoUrl = user?.repos_url;

  const getUserRepos = useCallback(
    async (repoUrl) => {
      const response = await fetch(repoUrl);
      const repoData = await response.json();
      dispatch({
        type: "GET_REPOS",
        payload: repoData,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    getUserData(login);
    getUserRepos(repoUrl);
  }, [login, repoUrl, getUserData, getUserRepos]);

  return <RepoList />;
};

export default User;
