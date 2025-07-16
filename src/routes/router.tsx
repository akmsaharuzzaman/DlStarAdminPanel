import ProtectedRoute from "@/components/auth/protected-route";
import DashboardPage from "@/components/pages/dashboard";
import LoginPage from "@/components/pages/login";
import Agencies from "@/pages/Agencies";
import Home from "@/pages/Home";
import UserListsPage from "@/pages/User-lists";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute allowedRoles={["admin", "user"]} />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>Page not found</div>,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
          },
          {
            path: "/user-lists",
            element: <UserListsPage />,
          },
          {
            path: "/agencies",
            element: <Agencies />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>Page not found</div>,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
          },
          {
            path: "/user-lists",
            element: <UserListsPage />,
          },
          {
            path: "/agencies",
            element: <Agencies />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
