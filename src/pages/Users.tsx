import { UserTable } from "@/components/pages/users/table-list";
import { AppPagination } from "@/components/shared/pagination";
import { SearchBar } from "@/components/shared/search-bar";
import { colors } from "@/constants/constant";
import { useGetUsersQuery } from "@/redux/api/power-shared";
import { useState } from "react";
const PAGE_LIMIT = 10;
const initialPage = 1;
const Users = () => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [q, setQ] = useState("");

  const { data: userResponse, isLoading } = useGetUsersQuery({
    page: currentPage,
    limit: PAGE_LIMIT,
    searchTerm: q,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!userResponse || !userResponse.result) {
    return <div>No user data found.</div>;
  }

  console.log(userResponse, "userResponse");
  const users = userResponse?.result?.users || [];
  const userData = users
    ? [...users].sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      })
    : [];

  console.log(userData, "userResponse");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <h3
          className="text-lg font-semibold"
          style={{ margin: 0, color: colors.textPrimary }}
        >
          All Users List
        </h3>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <SearchBar onChange={setQ} />
        </div>
      </div>

      {userData.length === 0 ? (
        <div
          style={{
            padding: 48,
            background: colors.card,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p style={{ color: colors.textMuted, marginBottom: 16 }}>
            No users matched your search.
          </p>
        </div>
      ) : (
        <UserTable data={userData} />
      )}

      <div className="w-full max-w-xl mx-auto mt-8">
        <AppPagination
          totalPages={userResponse.result?.pagination?.totalPage || 1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Users;
