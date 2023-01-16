const RepoItem = ({ repoData }) => {
  const { url, name, description, language, stars, forks, watchers } = repoData;
  return (
    <div className="p-2 m-4 bg-[#e5e7eb]">
      <a href={url}>{name}</a>
      <p>{description}</p>
      <h3>{language}</h3>
      <span>{stars}</span>
      <span>{forks}</span>
      <span>{watchers}</span>
    </div>
  );
};

export default RepoItem;
