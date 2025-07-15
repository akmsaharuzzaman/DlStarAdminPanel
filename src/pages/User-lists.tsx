import { userData } from "@/assets/data/user-data";
import { UserTable } from "@/components/tables";

const UserListsPage = () => {
  return (
    <div className="p-4">
      <UserTable users={userData} />
    </div>
  );
}


export default UserListsPage;