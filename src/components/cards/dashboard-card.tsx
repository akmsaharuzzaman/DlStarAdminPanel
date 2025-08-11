import { ExternalLink } from "lucide-react";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

// Props for DashboardCard
interface DashboardCardProps {
  title: string;
  value: ReactNode;
  children?: ReactNode;
  link?: string;
}

/**
 * DashboardCard: Shows a stat with a title and value, and optional children.
 */
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  value,
  children,
  link,
}) => (
  <Link to={link || ""} className="block group">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-sm font-medium text-gray-500 truncate">
            {title}
          </h3>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
          {children}
        </div>
        <div className="">
          <ExternalLink className="w-5 group-hover:text-blue-500" />
        </div>
      </div>
    </div>
  </Link>
);
