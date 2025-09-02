import { HostTable } from "@/components/pages/agency-by-id/table-list";
import { colors } from "@/constants/constant";
import { useLowerPortalManagementQuery } from "@/redux/api/power-shared";
import { Dispatch, useState } from "react";
import { useParams } from "react-router-dom";

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

const AgencyById = () => {
  const [q, setQ] = useState("");
  const { agencyId } = useParams();
  const {
    data: hostsRes,
    error,
    isLoading,
  } = useLowerPortalManagementQuery({
    // type: Roles.Host,
    id: agencyId!,
    searchTerm: q,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {(error as any).message}</div>;
  const hostData = hostsRes?.result?.users || [];
console.log({hostData});
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
          className="text-lg font-semibold m-0"
          style={{ color: colors.textPrimary }}
        >
          Host List
        </h3>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <SearchBar value={q} onChange={setQ} />
          {/* <Link to={ClientRoutes.Hosts}>
            <ActionTinyButton variant="primary">Create Host</ActionTinyButton>
          </Link> */}
        </div>
      </div>

      {hostData.length === 0 ? (
        <div
          style={{
            padding: 48,
            background: colors.card,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p style={{ color: colors.textMuted, marginBottom: 16 }}>
            No hosts matched your search.
          </p>
          {/* <Link to={ClientRoutes.Hosts}>
            <ActionTinyButton variant="primary">Create Host</ActionTinyButton>
          </Link> */}
        </div>
      ) : (
        <HostTable data={hostData} />
      )}
    </div>
  );
};

export default AgencyById;
