import { userData } from "@/assets/data/user-data";
import { UserTable } from "@/components/tables";

export const UserListsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Lists</h1>
      <UserTable users={userData} />
    </div>
  );
};
