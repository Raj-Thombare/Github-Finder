import React, { useContext } from "react";
import UserContext from "../../store/user-context";

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
          return (
            <div key={repo.id} className="p-2 m-4 bg-yellow-300">
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

export default RepoList;
