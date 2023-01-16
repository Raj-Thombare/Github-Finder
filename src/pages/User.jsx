import React, { useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../store/user-context";
import Image from "../components/UI/Image";
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
      const response = await fetch(`${repoUrl}?sort=created&per_page=10`);
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

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="p-5 flex flex-col justify-center min-w-[40%] min-h-screen left-0 md:fixed">
        <div
          className="card compact side bg-base-100 p-5 flex flex-col justify-center items-center border border-gray-200 rounded-lg shadow-md
          dark:bg-gray-800 dark:border-gray-700"
        >
          <Image
            src={user?.avatar}
            width="200px"
            alt="avatar"
            className="rounded-xl mb-5"
          />
          <div className="flex flex-row justify-between my-2 w-full font-semibold text-lg">
            <div>Follower: {user?.follower}</div>
            <div>Following: {user?.following}</div>
          </div>
          <h2 className="font-bold text-2xl">{user?.name}</h2>
          <h1 className="font-semibold text-lg">@{user?.username}</h1>
          <div className="font-semibold text-lg">Works at {user?.company}</div>
          <div className="font-semibold text-lg">
            Location: {user?.location}
          </div>
          <a
            href={`https://twitter.com/${user?.twitter}`}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-lg"
          >
            Twitter: {user?.twitter}
          </a>
          <div className="font-semibold text-lg">
            Public Repository: {user?.public_repos}
          </div>
          <a
            type="button"
            href={user?.github_url}
            class="my-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Visit Profile
          </a>
        </div>
      </div>
      <div className="min-w-[60%] md:absolute right-0">
        <RepoList />
      </div>
    </div>
  );
};

export default User;
