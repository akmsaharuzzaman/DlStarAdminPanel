import { ReactNode } from "react";
import { Card, CardContent } from "../ui/card";

export const StatsCard = ({
  value,
  label,
  icon,
  iconBg,
}: {
  value: number;
  label: string;
  icon: ReactNode | string | JSX.Element;
  iconBg: string;
}) => {
  return (
    <Card className="bg-gray-50 border-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-gray-400 mt-1">{label}</div>
          </div>
          <div
            className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}
          >
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
