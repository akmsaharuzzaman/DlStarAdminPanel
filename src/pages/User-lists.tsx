import { useState } from "react";
import { UserTable } from "@/components/tables";
import { useGetUsersQuery } from "@/redux/api/user.api";
import { SellCoinDialog } from "@/components/forms/sell-coin-dialog";
import { ShadcnPagination } from "@/components/ui/shadcn-pagination";

const PAGE_LIMIT = 6;

const UserListsPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [page, setPage] = useState(1);
  const { data: usersData, isLoading } = useGetUsersQuery({ page, limit: PAGE_LIMIT });

  const totalPage = usersData?.result?.pagination?.totalPage || 1;
  const users = usersData?.result?.users || [];

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <SellCoinDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          users={users}
        />
      )}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Lists</h1>
        <Header onSellCoinClick={() => setDialogOpen(true)} />
      </div>
      <UserTable usersData={users} isLoading={isLoading} />
      <ShadcnPagination
        page={page}
        totalPages={totalPage}
        onPageChange={setPage}
        maxButtons={5}
      />
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
