import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import RepoItem from "./RepoItem";

const RepoList = () => {
  const { repos } = useContext(UserContext);

  const repoSchema = repos?.map((repoData) => {
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

  return (
    <div>
      <h1 className="text-3xl my-4 p-2 font-bold card-title text-center">
        Latest Repositories
      </h1>
      {repoSchema?.map((repo) => {
        return <RepoItem key={repo.id} repoData={repo} />;
      })}
    </div>
  );
};

export default RepoList;
