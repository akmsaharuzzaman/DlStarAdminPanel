
import { Outlet } from "react-router-dom";
import { PageHeader } from "./page-header";

 const DemoLayout = () => {
  return (
    <div className="flex h-screen text-gray-900 bg-gray-100">
      <div className="flex-1 flex flex-col">
        <PageHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default DemoLayout;