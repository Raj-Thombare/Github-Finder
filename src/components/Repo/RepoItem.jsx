import { FaGithubAlt } from "react-icons/fa";

const RepoItem = ({ repoData }) => {
  const { url, name, description, language, stars, forks, watchers } = repoData;
  return (
    <div className="p-7 pb-2 m-4 bg-white shadow rounded-lg font-inter">
      <div className="flex items-baseline justify-between mb-3">
        <div>
          <a href={url} className="font-semibold text-xl">
            {name}
          </a>
          <p className="font-light text-base py-1">{description}</p>
          <h3 className="font-light text-base py-1">{language}</h3>
        </div>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            <FaGithubAlt size={25} />
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between w-full font-light text-sm gap-x-2">
          <dl className="flex flex-row min-w-[100%] justify-between">
            <div className="flex flex-col items-center justify-center font-light">
              <dt className="text-normal font-semibold">{stars}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Stars</dd>
            </div>
            <div className="flex flex-col items-center justify-center font-light">
              <dt className="text-normal font-semibold">{forks}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Forks</dd>
            </div>
            <div className="flex flex-col items-center justify-center font-light">
              <dt className="text-normal font-semibold">{watchers}</dt>
              <div className="text-gray-500 dark:text-gray-400">Watching</div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
