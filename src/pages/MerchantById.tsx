import { ActionTinyButton } from "@/components/buttons/action-tiny-buttons";
import { MerchantByIdTable } from "@/components/pages/merchants-by-id/table-list";
import { SearchBar } from "@/components/shared/search-bar";
import { colors } from "@/constants/constant";
import { ClientRoutes, Roles } from "@/constants/route.enum";
import { useGetMidPortalManagementQuery } from "@/redux/api/power-shared";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const MerchantById = () => {
  const [q, setQ] = useState("");

  const { merchantId } = useParams();
  const {
    data: resellerRes,
    error,
    isLoading,
  } = useGetMidPortalManagementQuery({
    type: Roles.Reseller,
    id: merchantId!,
    searchTerm: q,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {(error as any).message}</div>;
  const resellers = resellerRes?.result?.data || [];
  const resellerData = resellers
    ? [...resellers].sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      })
    : [];
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
          <SearchBar onChange={setQ} />
          <Link to={`${ClientRoutes.CreateReseller}/${merchantId}`}>
            <ActionTinyButton variant="primary">
              Create Reseller
            </ActionTinyButton>
          </Link>
        </div>
      </div>

      {resellerData.length === 0 ? (
        <div
          style={{
            padding: 48,
            background: colors.card,
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p style={{ color: colors.textMuted, marginBottom: 16 }}>
            <p className="w-1/2 mx-auto">
              "No resellers matched your search. You can create a new reseller
              by clicking the button below."
            </p>
          </p>
          <Link to={`${ClientRoutes.CreateReseller}/${merchantId}`}>
            <ActionTinyButton variant="primary">
              Create Reseller
            </ActionTinyButton>
          </Link>
        </div>
      ) : (
        <MerchantByIdTable data={resellerData} />
      )}
    </div>
  );
};

export default MerchantById;
