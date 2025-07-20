import { useState } from "react";
import { UserTable } from "@/components/tables";
import { useGetUsersQuery } from "@/redux/api/user.api";
import { SellCoinDialog } from "@/components/forms/sell-coin-dialog";

const UserListsPage = () => {
  const { data: usersData, isLoading } = useGetUsersQuery(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <SellCoinDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          users={usersData?.result?.users || []}
        />
      )}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Lists</h1>
        <Header onSellCoinClick={() => setDialogOpen(true)} />
      </div>
      <UserTable usersData={usersData?.result?.users} isLoading={isLoading} />
    </div>
  );
};

function Header({ onSellCoinClick }: { onSellCoinClick: () => void }) {
  return (
    <div className="flex justify-end my-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onSellCoinClick}
      >
        Sell Coin
      </button>
    </div>
  );
}

export default UserListsPage;
