import { PageHeader } from "@/components/layout/page-header";
import { Sidebar } from "@/components/layout/sidebar";
import { Activity, BarChart3, Gift, UserIcon } from "lucide-react";

import { Outlet } from "react-router-dom";

const Home = () => {
  // const [activeTab, setActiveTab] = useState("All");

  const sidebarItems = [
    { icon: Activity, label: "Dashboard", active: false, link: "/" },
    {
      icon: UserIcon,
      label: "User",
      link: "/user-lists",
      active: true,
      hasSubmenu: false,
    },
    {
      icon: BarChart3,
      label: "Agency",
      link: "/agencies",
      active: false,
      hasSubmenu: false,
    },
    { icon: Gift, label: "Reseler", link: "/", active: false },
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
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
