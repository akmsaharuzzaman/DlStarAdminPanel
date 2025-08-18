

// const userColumns = [
//   {
//     key: 'name',
//     label: 'User',
//     render: (user) => (
//       <div className="flex items-center gap-4">
//         <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full ring-1 ring-gray-200" />
//         <div>
//           <div className="font-semibold">{user.name}</div>
//           <div className="text-xs text-blue-600">{user.userRole}</div>
//         </div>
//       </div>
//     )
//   },
//   { key: 'uid', label: 'User ID' },
//   { key: 'gender', label: 'Gender' },
//   { key: 'country', label: 'Country' },
//   {
//     key: 'coins',
//     label: 'Coins / Diamonds',
//     render: (user) => (
//       <div className="flex gap-3">
//         <span className="text-yellow-600">🪙 {user.coins}</span>
//         <span className="text-blue-500">💎 {user.diamonds}</span>
//       </div>
//     )
//   },
//   {
//     key: 'level',
//     label: 'Level',
//     render: (user) => (
//       <span className="inline-block rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700">{user.level}</span>
//     )
//   },
//   {
//     key: 'activity_zone',
//     label: 'Zone',
//     render: (user) => <span className="capitalize text-green-600">{user.activity_zone.zone}</span>
//   },
//   {
//     key: 'joinedAt',
//     label: 'Dates',
//     render: (user) => (
//       <div className="text-sm text-gray-600">
//         <div><strong>Joined:</strong> {user.joinedAt}</div>
//         <div><strong>Birthday:</strong> {user.birthday}</div>
//         <div className="text-xs text-gray-400 font-mono">ID: {user._id}</div>
//       </div>
//     )
//   },
//   {
//     key: 'actions',
//     label: '',
//     render: (user) => (
//       <a href={`/users/${user.uid}`} title="View" className="text-blue-500 hover:text-blue-700">
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
//           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round"
//             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       </a>
//     )
//   }
// ];
