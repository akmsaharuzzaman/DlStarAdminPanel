import { userData } from "@/assets/data/user-data";
import { UserTable } from "@/components/tables/user-table";


function Demo() {
  return <UserTable data={userData} />;
}


export default Demo;

// const UserTable = ({ users }) => {
//   return (
//     <div className="min-h-screen overflow-x-auto bg-gray-50 p-6 font-sans">
//       <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//         <table className="min-w-full text-sm text-gray-800">
//           <thead className="bg-gray-100 text-xs tracking-wider text-gray-600 uppercase">
//             <tr>
//               <th className="px-6 py-4 text-left">User</th>
//               <th className="px-6 py-4 text-left">User ID</th>
//               <th className="px-6 py-4 text-left">Gender</th>
//               <th className="px-6 py-4 text-left">Country</th>
//               <th className="px-6 py-4 text-left">Coins / Diamonds</th>
//               <th className="px-6 py-4 text-left">Level</th>
//               <th className="px-6 py-4 text-left">Activity Zone</th>
//               <th className="px-6 py-4 text-left">Dates</th>
//               <th className="px-6 py-4 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100 bg-white">
//             {users.map((user, index) => (
//               <UserRow key={user._id} user={user} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// import { userData } from "@/assets/data/user-data";
// import { Link } from "react-router-dom"; // Optional if you're using routing

// const UserRow = ({ user }) => {
//   return (
//     <tr className="transition-all hover:bg-gray-50">
//       <td className="px-6 py-5">
//         <div className="flex items-center gap-4">
//           <img
//             src={user.avatar}
//             alt={user.name}
//             className="h-11 w-11 rounded-full ring-2 ring-gray-200"
//           />
//           <div>
//             <div className="font-semibold text-gray-900">{user.name}</div>
//             <div className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
//               {user.userRole}
//             </div>
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-5 font-mono text-xs text-gray-700">{user.uid}</td>
//       <td className="px-6 py-5">{user.gender || "—"}</td>
//       <td className="px-6 py-5 text-gray-500 italic">{user.country || "—"}</td>
//       <td className="px-6 py-5">
//         <div className="flex items-center gap-3">
//           <div className="flex items-center gap-1 text-sm text-yellow-500">
//             <span>🪙</span> {user.coins}
//           </div>
//           <div className="flex items-center gap-1 text-sm text-blue-400">
//             <span>💎</span> {user.diamonds}
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-5 text-center">
//         <span className="inline-block rounded-md bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
//           {user.level}
//         </span>
//       </td>
//       <td className="px-6 py-5 font-medium text-green-600 capitalize">
//         {user.activity_zone.zone}
//       </td>
//       <td className="px-6 py-5 text-sm text-gray-600">
//         <div>
//           <span className="font-medium text-gray-800">Joined:</span>{" "}
//           {user.joinedAt}
//         </div>
//         <div>
//           <span className="font-medium text-gray-800">Birthday:</span>{" "}
//           {user.birthday}
//         </div>
//         <div className="mt-1 font-mono text-xs text-gray-400">
//           ID: {user._id}
//         </div>
//       </td>
//       <td className="px-6 py-5 text-right">
//         <Link
//           to={`/users/${user.uid}`}
//           title="View Details"
//           className="text-blue-500 hover:text-blue-700"
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//             />
//           </svg>
//         </Link>
//       </td>
//     </tr>
//   );
// };
