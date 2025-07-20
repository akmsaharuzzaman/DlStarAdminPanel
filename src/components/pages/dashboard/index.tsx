import { UserIcon, Users, HandCoins, Coins } from "lucide-react";
import { StatsCard } from "@/components/cards";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGetUsersQuery } from "@/redux/api/user.api";
import { useGetAllModeratorUsersQuery } from "@/redux/api/moderator.api";

export default function DashboardPage() {
  // const [activeTab, setActiveTab] = useState("All");
  const { data: users } = useGetUsersQuery(null);
  const { data: moderators } = useGetAllModeratorUsersQuery(null);
  const staticStatesData = {
    totalUser: users?.result?.users?.length || 0,
    totalAgency: moderators?.result?.users.length || 0,
    totalCoin: 100,
    totalSpendCoin: 1,
  };
fix: improve error handling in sellCoinDialog and update user state display in UserTable
  const stats = [
    {
      value: staticStatesData.totalUser,
      label: "Total User",
      icon: <UserIcon className="w-6 h-6 text-white" />,
      iconBg: "bg-pink-500",
    },
    {
      value: staticStatesData.totalAgency,
      label: "Total Agency",
      icon: <Users className="w-6 h-6 text-white" />,
      iconBg: "bg-green-500",
    },
    {
      value: staticStatesData.totalCoin,
      label: "Total Coin",
      icon: <HandCoins className="w-6 h-6 text-white" />,
      iconBg: "bg-red-400",
    },
    {
      value: staticStatesData.totalSpendCoin,
      label: "Total Spend Coin",
      icon: <Coins className="w-6 h-6 text-white" />,
      iconBg: "bg-red-400",
    },
  ];

  // Prepare data for the chart
  const chartData = stats.map((stat) => ({
    name: stat.label,
    value: stat.value,
  }));

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </div>

      {/* Visual Graph */}
      <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-6 md:mb-8 w-full">
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
          Statistics Overview
        </h3>
        <div className="w-full h-[200px] md:h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
