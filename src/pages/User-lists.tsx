
import { UserTable } from "@/components/tables";
import { useGetUsersQuery } from "@/redux/api/user.api";

const UserListsPage = () => {
  const { data: usersData, isLoading } = useGetUsersQuery(null);
 

  return (
    <div className="p-4">
      <div className="mb-4 max-w-xs">
        {/* <Input
          type="text"
          placeholder="Search by email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        /> */}
        <h1 className="text-2xl font-bold">User Lists</h1>
      </div>
      <UserTable usersData={usersData?.result} isLoading={isLoading} />
    </div>
  );
};

export default UserListsPage;
