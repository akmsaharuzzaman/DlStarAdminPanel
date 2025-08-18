import { Table } from "@/components/tables/table";

import { renderCountryAdminTableRow } from "./table-row";

export const CountryAdminTable = ({ data }: { data: any[] }) => {
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
    <Table columns={columns} data={data} rowRenderer={renderCountryAdminTableRow} />
  );
};
