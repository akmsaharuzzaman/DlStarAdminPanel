import { Table } from "@/components/tables/table";
import { renderUserRow } from "./user-row";

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
    "Actions",
  ];

  return <Table columns={columns} data={data} rowRenderer={renderUserRow} />;
};
