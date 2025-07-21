import { useState } from "react";
import { UserTable } from "@/components/tables";
import { useGetUsersQuery } from "@/redux/api/user.api";
import { SellCoinDialog } from "@/components/forms/sell-coin-dialog";

const PAGE_LIMIT = 2;

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
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Previous
        </button>
        <span className="mx-2">Page {page} of {totalPage}</span>
        <button
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
          disabled={page === totalPage}
          onClick={() => setPage((p) => Math.min(totalPage, p + 1))}
        >
          Next
        </button>
      </div>
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
