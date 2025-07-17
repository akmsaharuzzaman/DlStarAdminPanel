import { useState } from "react";
import { UserTable } from "@/components/tables";
import { Input } from "@/components/ui/input";
import { useGetUsersQuery } from "@/redux/api/user.api";

const UserListsPage = () => {
  const { data: usersData, isLoading } = useGetUsersQuery(null);
  const [search, setSearch] = useState("");
  // const filteredUsers = usersData?.result?.filter((user) =>
  //   user.email?.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="p-4">
      <div className="mb-4 max-w-xs">
        <Input
          type="text"
          placeholder="Search by email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>
      <UserTable usersData={usersData?.result} isLoading={isLoading} />
    </div>
  );
};

export default UserListsPage;
