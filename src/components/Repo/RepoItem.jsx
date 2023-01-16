import React from "react";

const RepoItem = ({
  id,
  url,
  name,
  description,
  language,
  stars,
  forks,
  watchers,
} = repoData) => {
  return (
    <div>
      <div key={id} className="p-2 m-4 bg-yellow-300">
        <a href={url}>{name}</a>
        <p>{description}</p>
        <h3>{language}</h3>
        <span>{stars}</span>
        <span>{forks}</span>
        <span>{watchers}</span>
      </div>
    </div>
  );
};

export default RepoItem;
