import React from "react";
interface IColumn {
  key: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}
interface IGenericTableProps {
  columns: IColumn[];
  data: any[];
}

const GenericTable = ({ columns, data }: IGenericTableProps) => {
  return (
    <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-gray-100 text-xs tracking-wider text-gray-600 uppercase">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4 text-left">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className="hover:bg-gray-50 transition-all"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenericTable;
