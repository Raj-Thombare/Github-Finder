import React, { useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../store/user-context";
import Image from "../components/UI/Image";
import RepoList from "../components/Repo/RepoList";
import Navbar from "../components/UI/Navbar";

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
    <div className="bg-[#f0f0f0] min-h-screen">
      <Navbar />
      <div className="min-w-[100%] flex flex-col md:flex md:flex-row ">
        <div className="p-5 flex flex-col justify-start min-w-[40%] min-h-fit md:fixed left-0 md:min-h-screen">
          <div className="card compact side bg-base-100 bg-white p-5 flex flex-col justify-center items-center border rounded-lg shadow-md text-center">
            <Image
              src={user?.avatar}
              width="200px"
              alt="avatar"
              className="rounded-xl mb-3"
            />
            <dl className="grid max-w-screen-xl grid-cols-3 gap-x-2 py-2 px-4 mx-auto sm:grid-cols-3 xl:grid-cols-3 items-baseline">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-2xl font-extrabold">
                  {user?.follower}
                </dt>
                <dd className="font-light">Follower</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-2xl font-extrabold">
                  {user?.following}
                </dt>
                <dd className="font-light">Following</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-2xl font-extrabold">
                  {user?.public_repos}
                </dt>
                <div className="font-light">Repository</div>
              </div>
            </dl>
            <h2 className="font-bold text-2xl my-2">{user?.name}</h2>
            <h1 className="font-semibold text-lg">@{user?.username}</h1>
            <div className="text-normal">Works at {user?.company}</div>
            <div className="text-normal">Location: {user?.location}</div>
            <a
              type="button"
              href={user?.github_url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 text-white bg-black hover:opacity-75 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Visit Profile
            </a>
          </div>
        </div>
        <div className="min-w-[60%] ml-[0%] md:ml-[40%]">
          <RepoList />
        </div>
      </div>
    </div>
  );
};

export default User;
