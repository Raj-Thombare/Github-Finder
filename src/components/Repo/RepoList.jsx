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
      <div>
        {repoSchema?.map((repo) => {
          console.log(repo);
          return <RepoItem repoData={repo} />;
        })}
      </div>
    </div>
  );
};

export default RepoList;
