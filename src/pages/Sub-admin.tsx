// -----------------------------
// Color palette & small helpers

import { ActionTinyButton } from "@/components/buttons/action-tiny-buttons";
import { SubAdminTable } from "@/components/pages/sub-admin/table-list";
import { colors } from "@/constants/constant";
import { useGetSubAdminsQuery } from "@/redux/api/power-shared";
import { Dispatch, useMemo, useState } from "react";

// -----------------------------

// const formatDate = (iso) => {
//   try {
//     return new Date(iso).toLocaleDateString();
//   } catch (e) {
//     return "—";
//   }
// };

const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: Dispatch<React.SetStateAction<string>>;
}) => (
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search users by name, email or uid..."
      style={{
        padding: "10px 12px",
        borderRadius: 8,
        border: "1px solid #E5E7EB",
        width: 320,
      }}
    />
    <button
      style={{
        padding: "9px 12px",
        borderRadius: 8,
        border: "1px solid #E5E7EB",
        background: "white",
        cursor: "pointer",
      }}
    >
      🔎
    </button>
  </div>
);

const SubAdmin = () => {
  const [q, setQ] = useState("");
  const { data: subAdminRes, isLoading } = useGetSubAdminsQuery({
    page: 1,
    limit: 200,
  });
  const subAdminData = subAdminRes?.result?.data || [];

  const filtered = useMemo(
    () =>
      subAdminData.filter((u) => {
        const s = q.trim().toLowerCase();
        if (!s) return true;
        return [u.name, u.email, u.uid].some((v) =>
          (v || "").toLowerCase().includes(s)
        );
      }),
    [subAdminData, q]
  );

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a spinner or skeleton loader
  }
  const onCreate = () => {
    // Logic to handle user creation
    console.log("Create User button clicked");
    alert("Create User button clicked");
  };
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
          Sub Admin List
        </h3>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <SearchBar value={q} onChange={setQ} />
          <ActionTinyButton onClick={onCreate} variant="primary">
            Create Sub-admin
          </ActionTinyButton>
        </div>
      </div>

      {subAdminData.length === 0 ? (
        <div
          style={{
            padding: 48,
            background: colors.card,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p style={{ color: colors.textMuted, marginBottom: 16 }}>
            No sub-admins found.
            <br />
            Please create a sub-admin to manage your platform.
          </p>
          <ActionTinyButton onClick={onCreate} variant="primary">
            Create Sub-admin
          </ActionTinyButton>
        </div>
      ) : filtered.length === 0 ? (
        <div
          style={{
            padding: 48,
            background: colors.card,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p style={{ color: colors.textMuted, marginBottom: 16 }}>
            No sub-admin matched your search.
          </p>
          <ActionTinyButton onClick={onCreate} variant="primary">
            Create Sub-admin
          </ActionTinyButton>
        </div>
      ) : (
        <SubAdminTable data={subAdminData} />
      )}
    </div>
  );
};

export default SubAdmin;
