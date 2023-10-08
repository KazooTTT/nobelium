import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null;

  const sortedTags = Object.keys(tags).sort((a, b) => {
    if (tags[b] === tags[a]) {
      return a.localeCompare(b);
    }
    return tags[b] - tags[a];
  });

  return (
    <ul className="flex-col w-fit mr-4">
      {sortedTags.map((key) => {
        const selected = key === currentTag;
        return (
          <li
            key={key}
            className={`mb-1 text-sm font-medium border whitespace-nowrap dark:text-gray-300 ${
              selected
                ? "text-white bg-black border-black dark:bg-gray-600 dark:border-gray-600"
                : "bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-800"
            }`}
          >
            <Link
              key={key}
              href={selected ? "/search" : `/tag/${encodeURIComponent(key)}`}
              className="px-4 py-1 block"
            >
              {`${key} (${tags[key]})`}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Tags
