import React, { useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../store/user-context";

const User = () => {
  const { dispatch, user, repos } = useContext(UserContext);

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

  const repo = repos?.map((repoData) => {
    return {
      id: repoData.id,
      name: repoData.name,
      url: repoData.html_url,
      description: repoData.description,
      language: repoData.language,
      forks: repoData.forks_count,
      stars: repoData.stargazers_count,
      watchers: repoData.watchers_count,
    };
  });

  useEffect(() => {
    getUserData(login);
    getUserRepos(repoUrl);
  }, [login, repoUrl, getUserData, getUserRepos]);

  console.log(repo);
  return (
    <div>
      <div>
        {repos?.map((repo) => {
          return (
            <div key={repo.id} className="p-2 m-4 bg-black text-white">
              <a href={repo.url}>{repo.name}</a>
              <p>{repo.description}</p>
              <h3>{repo.language}</h3>
              <span>{repo.stars}</span>
              <span>{repo.forks}</span>
              <span>{repo.watchers}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
