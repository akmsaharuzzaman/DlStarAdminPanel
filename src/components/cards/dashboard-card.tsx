import { FC, ReactNode } from "react";

// Props for DashboardCard
interface DashboardCardProps {
  title: string;
  value: ReactNode;
  children?: ReactNode;
}

/**
 * DashboardCard: Shows a stat with a title and value, and optional children.
 */
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  value,
  children,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
    <h3 className="text-sm font-medium text-gray-500 truncate">{title}</h3>
    <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
    {children}
  </div>
);
