import { Table } from "@/components/tables/table";
import { renderHostRow } from "./host-row";

export const HostTable = ({ data }: { data: any[] }) => {
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

  return <Table columns={columns} data={data} rowRenderer={renderHostRow} />;
};
