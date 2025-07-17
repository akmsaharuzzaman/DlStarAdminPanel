import { PageHeader } from "@/components/layout/page-header";
import { Outlet } from "react-router-dom";

const Home = () => {
  // const location = useLocation();

  // const sidebarItems = [
  //   { icon: Activity, label: "Dashboard", link: "/" },
  //   { icon: UserIcon, label: "User", link: "/user-lists", hasSubmenu: false },
  //   { icon: BarChart3, label: "Agency", link: "/agencies", hasSubmenu: false },
  //   { icon: Gift, label: "Reseler", link: "/reseler", hasSubmenu: false },
  // ];

  // const breadcrumbs = [
  //   { label: "Dashboard", active: true },
  //   { label: "User", active: false },
  // ];

  return (
    <div className="flex h-screen text-gray-900 bg-gray-100">
      {/* <Sidebar items={sidebarItems} currentPath={location.pathname} /> */}
      <div className="flex-1 flex flex-col">
        <PageHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
