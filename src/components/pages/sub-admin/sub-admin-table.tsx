import { Table } from "@/components/tables/table";
import { renderSubAdminRow } from "./sub-admin-row";

export const SubAdminTable = ({ data }: { data: any[] }) => {
  const columns = [
    "User",
    "User ID",
    "Gender",
    "Country",
    "Coins / Diamonds",
    "Level",
    "Activity Zone",
    "Dates",
    "Actions",
  ];

  return (
    <Table columns={columns} data={data} rowRenderer={renderSubAdminRow} />
  );
};
