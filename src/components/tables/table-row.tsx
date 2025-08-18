import { ReactNode } from "react";

export const TableRow = ({ children }: { children: ReactNode }) => (
  <tr className="transition-all hover:bg-gray-50">{children}</tr>
);
