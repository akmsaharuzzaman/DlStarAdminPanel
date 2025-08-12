import { merchantData } from "@/assets/data/merchant-data";
import { subAdminData } from "@/assets/data/sub-admin-data";
import { ActionTinyButton } from "@/components/buttons/action-tiny-buttons";
import { MerchantTable } from "@/components/pages/merchants/merchant-table";
import { SearchBar } from "@/components/shared/search-bar";
import { colors } from "@/constants/constant";
import { useMemo, useState } from "react";

const Merchant = () => {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      subAdminData.filter((u) => {
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
    console.log("Create Merchant User button clicked");
    alert("Create Merchant User button clicked");
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
          Merchants List
        </h3>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <SearchBar value={q} onChange={setQ} />
          <ActionTinyButton onClick={onCreate} variant="primary">
            Create Merchant
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
            No merchant matched your search.
          </p>
          <ActionTinyButton onClick={onCreate} variant="primary">
            Create Merchant
          </ActionTinyButton>
        </div>
      ) : (
        <MerchantTable data={merchantData} />
      )}
    </div>
  );
};

export default Merchant;
