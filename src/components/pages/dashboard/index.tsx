import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Activity,
  UserIcon,
  Users,
  BarChart3,
  Gift,
  Search,
  MapPin,
} from "lucide-react";
import { StatsCard } from "@/components/cards";
import { UserTable } from "@/components/tables";
import { userData } from "@/assets/data/user-data";
import { Sidebar } from "@/components/layout/sidebar";

// Sidebar component

// PageHeader component
function PageHeader({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: { label: string; active: boolean }[];
}) {
  return (
    <div className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        {breadcrumbs.map((crumb, idx) => (
          <span key={idx} className={crumb.active ? "text-pink-400" : ""}>
            {crumb.label}
            {idx < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("All");

  const sidebarItems = [
    { icon: Activity, label: "Dashboard", active: false },
    { icon: UserIcon, label: "User", active: true, hasSubmenu: true },
    { icon: BarChart3, label: "Agency", active: false, hasSubmenu: true },
    { icon: Gift, label: "Gift", active: false, hasSubmenu: true },
  ];

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

  const breadcrumbs = [
    { label: "Dashboard", active: true },
    { label: "User", active: false },
  ];

  return (
    <div className="flex h-screen text-gray-900 bg-gray-100">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 flex flex-col">
        <PageHeader title="User" breadcrumbs={breadcrumbs} />
        <div className="p-6">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <StatsCard key={idx} {...stat} />
            ))}
          </div>
          {/* Filters and Search */}
          <div className="flex items-center justify-between mb-6">
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
          <UserTable users={userData} />
        </div>
      </div>
    </div>
  );
}
