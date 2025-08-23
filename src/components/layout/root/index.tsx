import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMyProfileQuery } from "@/redux/api/auth.api";
import { logOut } from "@/redux/features/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { LogOut, Settings, User } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";

// const roleOptions: { value: Role; label: string }[] = [
//   { value: "admin", label: "Admin" },
//   { value: "sub-admin", label: "Sub-Admin" },
//   { value: "agency", label: "Agency" },
//   { value: "merchant", label: "Merchant" },
//   { value: "re-seller", label: "Re-Seller" },
// ];
const RootLayout = () => {
  // const context = useContext(RoleContext);
  // if (!context) {
  //   throw new Error("DemoLayout must be used within a RoleProvider");
  // }
  // const { role, setRole } = context;
  // const user = useAppSelector(selectUser);
  const { data: profileRes } = useMyProfileQuery();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  const profile = profileRes?.result;
  const fallbackName = profile?.name
    ? profile.name.charAt(0).toUpperCase()
    : "U";
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

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-3 focus:outline-none">
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={
                      profile?.avatar ||
                      "https://dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"
                    }
                    alt="User"
                  />
                  <AvatarFallback>{fallbackName}</AvatarFallback>
                </Avatar>
                {/* <div className="hidden sm:flex flex-col text-left">
                  <span className="text-sm font-medium text-gray-800">
                    John
                  </span>
                  <span className="text-xs text-gray-500">
                    john@example.com
                  </span>
                </div> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <div className="flex items-center space-x-4">
              <div className="flex justify-center gap-x-4">
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
            </div> */}
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
