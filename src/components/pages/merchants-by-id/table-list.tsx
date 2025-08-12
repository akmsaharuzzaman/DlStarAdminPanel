import { Table } from "@/components/tables/table";
import { renderMerchantByIdRow } from "./table-row";

export const MerchantByIdTable = ({ data }: { data: any[] }) => {
  const columns = [
    "User",
    "User ID",
    "Gender",
    "Country",
    "Coins / Diamonds",
    "Level",
    "Activity Zone",
    "Dates",
  ];

  return (
    <Table columns={columns} data={data} rowRenderer={renderMerchantByIdRow} />
  );
};
