import { UserTable } from "@/components/pages/users/table-list";
import { AppPagination } from "@/components/shared/pagination";
import { SearchBar } from "@/components/shared/search-bar";
import { colors } from "@/constants/constant";
import { useGetUsersQuery } from "@/redux/api/user.api";
import { useMemo, useState } from "react";
const PAGE_LIMIT = 8;
const initialPage = 1;
const Users = () => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [q, setQ] = useState("");

  const { data: userResponse, isLoading } = useGetUsersQuery({
    page: currentPage,
    limit: PAGE_LIMIT,
  });

  const userData = userResponse?.result?.users || [];
  const filtered = useMemo(
    () =>
      userData?.filter((u) => {
        const s = q.trim().toLowerCase();
        if (!s) return true;
        return [u.name, u.email, u.uid].some((v) =>
          (v || "").toLowerCase().includes(s)
        );
      }),
    [q, userData]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!userResponse || !userResponse.result) {
    return <div>No user data found.</div>;
  }
  console.log(userResponse, "userResponse");

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
          <SearchBar value={q} onChange={setQ} />
        </div>
      </div>

      {filtered.length === 0 ? (
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
