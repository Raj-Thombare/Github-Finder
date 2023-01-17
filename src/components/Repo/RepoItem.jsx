const RepoItem = ({ repoData }) => {
  const { url, name, description, language, stars, forks, watchers } = repoData;
  return (
    <div className="p-7 m-4 bg-[#f0f0f0] rounded-xl shadow">
      <div className="flex items-baseline justify-between mb-3">
        <div>
          <a href={url} className="font-semibold text-xl">
            {name}
          </a>
          <p className="font-light text-base py-1">{description}</p>
          <h3 className="font-light text-base py-1">{language}</h3>
        </div>
        <div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-black hover:opacity-75 text-white font-semibold text-sm rounded-xl"
          >
            Github
          </a>
        </div>
      </div>
      <div>
        <div className="mt-2 flex flex-row justify-between w-full font-light text-sm gap-x-2">
          <div>{stars} Stars</div>
          <div>{forks} Forks</div>
          <div>{watchers} Watching</div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
