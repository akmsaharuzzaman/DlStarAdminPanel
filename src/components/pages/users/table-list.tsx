import { Table } from "@/components/tables/table";
import { renderUserRow } from "./table-row";

export const UserTable = ({ data }: { data: any[] }) => {
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

  return <Table columns={columns} data={data} rowRenderer={renderUserRow} />;
};
