import { PageHeader } from "@/components/layout/page-header";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex h-screen text-gray-900 bg-gray-100">
      <div className="flex-1 flex flex-col">
        <PageHeader />
        <Outlet />
      </div>
    </div>
  );
};
