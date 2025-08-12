import { resellerData } from "@/assets/data/reseller-data";
import { MerchantByIdTable } from "@/components/pages/merchants-by-id/table-list";
import { SearchBar } from "@/components/shared/search-bar";
import { colors } from "@/constants/constant";
import { useMemo, useState } from "react";

const MerchantById = () => {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      resellerData.filter((u) => {
        const s = q.trim().toLowerCase();
        if (!s) return true;
        return [u.name, u.email, u.uid].some((v) =>
          (v || "").toLowerCase().includes(s)
        );
      }),
    [q]
  );

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
          All Resellers List
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
            No reseller matched your search.
          </p>
        </div>
      ) : (
        <MerchantByIdTable data={resellerData} />
      )}
    </div>
  );
};

export default MerchantById;
