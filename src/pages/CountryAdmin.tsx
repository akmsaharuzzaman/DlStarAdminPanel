import { countryAdminData } from "@/assets/data/country-admin";
import { ActionTinyButton } from "@/components/buttons/action-tiny-buttons";
import { CountryAdminTable } from "@/components/pages/country-admin/table-list";
import { SearchBar } from "@/components/shared/search-bar";
import { colors } from "@/constants/constant";
import { useMemo, useState } from "react";

const CountryAdmin = () => {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      countryAdminData.filter((u) => {
        const s = q.trim().toLowerCase();
        if (!s) return true;
        return [u.name, u.email, u.uid].some((v) =>
          (v || "").toLowerCase().includes(s)
        );
      }),
    [q]
  );
  const onCreate = () => {
    // Logic to handle user creation
    console.log("Create CountryAdmin User button clicked");
    alert("Create CountryAdmin User button clicked");
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
          Country Admins List
        </h3>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <SearchBar value={q} onChange={setQ} />
          <ActionTinyButton onClick={onCreate} variant="primary">
            Create Country Admin
          </ActionTinyButton>
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
            No Country Admin matched your search.
          </p>
          <ActionTinyButton onClick={onCreate} variant="primary">
            Create Country Admin
          </ActionTinyButton>
        </div>
      ) : (
        <CountryAdminTable data={countryAdminData} />
      )}
    </div>
  );
};

export default CountryAdmin;
