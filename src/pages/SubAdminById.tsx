// -----------------------------
// Color palette & small helpers

import { ActionTinyButton } from "@/components/buttons/action-tiny-buttons";
import { AgencyTable } from "@/components/pages/sub-admin-by-id/table-list";
import { colors } from "@/constants/constant";
import { ClientRoutes, Roles } from "@/constants/route.enum";
import { useGetMidPortalManagementQuery } from "@/redux/api/power-shared";
import { Dispatch, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

const SubAdminById = () => {
  const { subAdminId } = useParams();

  const [q, setQ] = useState("");

  const { data: subAdminRes, isLoading } = useGetMidPortalManagementQuery({
    type: Roles.Agency,
    id: subAdminId!,
    searchTerm: q,
  });

  const subAdminData = subAdminRes?.result?.data || [];
  // const filtered = useMemo(
  //   () =>
  //     subAdminData.filter((u) => {
  //       const s = q.trim().toLowerCase();
  //       if (!s) return true;
  //       return [u.name, u.email, u.uid].some((v) =>
  //         (v || "").toLowerCase().includes(s)
  //       );
  //     }),
  //   [q]
  // );

  if (!subAdminId) {
    return <div>Sub Admin ID is required</div>;
  }
  if (isLoading) return <div> Agency Lists is Loading...</div>;
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
          Agency List
        </h3>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <SearchBar value={q} onChange={setQ} />
          <Link to={`${ClientRoutes.CreateAgency}/${subAdminId}`}>
            <ActionTinyButton variant="primary">Create Agency</ActionTinyButton>
          </Link>
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
            No agency matched your search.
          </p>
          <Link to={`${ClientRoutes.CreateAgency}/${subAdminId}`}>
            <ActionTinyButton variant="primary">Create Agency</ActionTinyButton>
          </Link>
        </div>
      ) : (
        <AgencyTable data={subAdminData} />
      )}
    </div>
  );
};

export default SubAdminById;
