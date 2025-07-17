export const UsersLoadingSkeleton = () => {
  const rows = 7;
  // Table columns: No., Image, Name, UniqueId, Gender, RCoin, Country, Level, isBlock, isHost, Agency
  const colClasses = [
    '', // No.
    'h-10 w-10 rounded-md', // Image
    'w-32', // Name
    'w-24', // UniqueId
    'w-16', // Gender
    'w-10', // RCoin
    'w-20', // Country
    'w-16', // Level
    'w-16', // isBlock
    'w-12', // isHost
    'w-20', // Agency
  ];

  return (
    <>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <tr className="border-b border-gray-200 animate-pulse" key={rowIdx}>
          {colClasses.map((colClass, colIdx) => (
            <td className="p-4 align-middle" key={colIdx}>
              <div
                className={`bg-gray-200 animate-shimmer rounded ${colClass} ${colIdx === 1 ? '' : 'h-4'} w-full`}
              ></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};