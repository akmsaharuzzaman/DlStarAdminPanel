import { ActionTinyButton } from "@/components/buttons/action-tiny-buttons";
import { MerchantTable } from "@/components/pages/merchants/table-list";
import { SearchBar } from "@/components/shared/search-bar";
import { colors } from "@/constants/constant";
import { useGetMerchantsQuery } from "@/redux/api/power-shared";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Merchant = () => {
  const [q, setQ] = useState("");

  const { data: merchantRes, isLoading } = useGetMerchantsQuery({});
  const merchantData = merchantRes?.result?.data || [];
  const filtered = useMemo(
    () =>
      merchantData.filter((u) => {
        const s = q.trim().toLowerCase();
        if (!s) return true;
        return [u.name, u.email, u.uid].some((v) =>
          (v || "").toLowerCase().includes(s)
        );
      }),
    [merchantData, q]
  );

  if (isLoading) return <div>Loading...</div>;

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
          <Link to="/create-merchant">
            <ActionTinyButton variant="primary">
              Create Merchant
            </ActionTinyButton>
          </Link>
        </div>
      </div>

      {merchantData.length === 0 ? (
        <div
          style={{
            padding: 48,
            background: colors.card,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p style={{ color: colors.textMuted, marginBottom: 16 }}>
            No merchant found.
            <br />
            Please create a merchant to manage your platform.
          </p>
          <Link to="/create-merchant">
            <ActionTinyButton variant="primary">
              Create Merchant
            </ActionTinyButton>
          </Link>
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
            No merchant matched your search.
          </p>
          <Link to="/create-merchant">
            <ActionTinyButton variant="primary">
              Create Merchant
            </ActionTinyButton>
          </Link>
        </div>
      ) : (
        <MerchantTable data={merchantData} />
      )}
    </div>
  );
};

export default Merchant;
