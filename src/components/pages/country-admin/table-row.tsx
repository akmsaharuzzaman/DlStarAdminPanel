import { TUser } from "@/types/api/auth";

export const renderCountryAdminTableRow = (user: TUser) => (
  <>
    <td className="px-6 py-5">
      <div className="flex items-center gap-4">
        <img
          src={
            user?.avatar ||
            `https://placehold.co/600x400/caf0f8/000000/png?text=${
              user?.name?.charAt(0) || "U"
            }`
          }
          alt="Avatar"
          className="h-11 w-11 rounded-full ring-2 ring-gray-200"
        />
        <div>
          <div className="font-semibold text-gray-900">{user?.name}</div>
          <div className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
            {user?.userRole}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-5 font-mono text-xs text-gray-700">{user?.userId}</td>
    <td className="px-6 py-5">{user?.gender}</td>
    <td className="px-6 py-5 text-gray-500 italic">{user?.country || "N/A"}</td>
    <td className="px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          <span className="text-base">🪙</span> {user?.stats?.coins || 0}
        </div>
        <div className="flex items-center gap-1 text-sm text-blue-400">
          <span className="text-base">💎</span> {user?.stats?.diamonds || 0}
        </div>
      </div>
    </td>
    <td className="px-6 py-5 text-center">
      <span className="inline-block rounded-md bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
        {user?.stats?.levels || 0}
      </span>
    </td>
    <td
      className={`px-6 py-5 font-medium capitalize ${
        user?.activityZone?.zone === "safe" ? "text-green-600" : "text-red-600"
      }`}
    >
      {user?.activityZone?.zone}
    </td>
    <td className="px-6 py-5 text-sm text-gray-600">
      <div>
        <span className="font-medium text-gray-800">Joined:</span>{" "}
        {new Date(user?.createdAt)?.toLocaleDateString()}
      </div>
      <div>
        <span className="font-medium text-gray-800">Updated:</span>{" "}
        {new Date(user?.updatedAt)?.toLocaleDateString()}
      </div>
      <div className="mt-1 font-mono text-xs text-gray-400">
        ID: {user?._id}
      </div>
    </td>
  </>
);
