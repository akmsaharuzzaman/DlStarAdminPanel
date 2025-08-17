import { RoleContext } from "@/provider/role-provider";
import { Role } from "@/types/pages/dashboard";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

const roleOptions: { value: Role; label: string }[] = [
  { value: "admin", label: "Admin" },
  { value: "sub-admin", label: "Sub-Admin" },
  { value: "agency", label: "Agency" },
  { value: "merchant", label: "Merchant" },
  { value: "re-seller", label: "Re-Seller" },
];
const RootLayout = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("DemoLayout must be used within a RoleProvider");
  }
  const { role, setRole } = context;
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header with role switcher */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div>
                {/* <h2 className="text-2xl font-semibold">{title}</h2> */}
                <Link to="/" className="">
                  <img
                    src="/logo.jpeg"
                    alt="Logo"
                    className="h-auto w-12 rounded-lg"
                  />
                </Link>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-800">
                Dlstar
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex justify-center gap-x-4">
                {/* <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Dashboard
                </Link> */}
                <Link
                  to="/gifts"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Gifts
                </Link>
              </div>
              <span className="hidden sm:inline text-gray-600">
                Viewing as:
              </span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
                className="p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
              >
                {roleOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main dashboard view */}
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
