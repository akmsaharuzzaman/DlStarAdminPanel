import { Table } from "@/components/tables/table";
import { renderAgencyRow } from "./agency-row";


export const AgencyTable = ({ data }: { data: any[] }) => {
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
    <Table columns={columns} data={data} rowRenderer={renderAgencyRow} />
  );
};
