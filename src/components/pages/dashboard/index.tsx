import { UserIcon, Users, MapPin } from "lucide-react";
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

export default function DashboardPage() {
  // const [activeTab, setActiveTab] = useState("All");

  const stats = [
    {
      value: 9,
      label: "Total User",
      icon: <UserIcon className="w-6 h-6 text-white" />,
      iconBg: "bg-pink-500",
    },
    {
      value: 0,
      label: "Total Agency",
      icon: <MapPin className="w-6 h-6 text-white" />,
      iconBg: "bg-green-500",
    },
    {
      value: 1,
      label: "Total Coin",
      icon: <Users className="w-6 h-6 text-white" />,
      iconBg: "bg-red-400",
    },
    {
      value: 1,
      label: "Total Spend Coin",
      icon: <Users className="w-6 h-6 text-white" />,
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

      {/* Filters and Search */}
      {/* <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2">
          <Button
            variant={activeTab === "All" ? "default" : "outline"}
            onClick={() => setActiveTab("All")}
            className={`${
              activeTab === "All"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-100 border-gray-600 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Button>
          <Button
            variant={activeTab === "Analytics" ? "default" : "outline"}
            onClick={() => setActiveTab("Analytics")}
            className={`${
              activeTab === "Analytics"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Analytics
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="What're you searching for?"
            className="pl-10 w-80 bg-gray-100 border-gray-600 text-black placeholder-gray-400"
          />
        </div>
      </div>
      <UserTable users={userData} /> */}
    </div>
  );
}
