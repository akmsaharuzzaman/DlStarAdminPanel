import ProtectedRoute from "@/components/auth/protected-route";
import DashboardPage from "@/components/pages/dashboard";
import LoginPage from "@/components/pages/login";
import GiftListsPage from "@/pages/Gifts";
import Home from "@/pages/Home";
import ModeratorListsPage from "@/pages/Moderator-lists";
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
            element: <ModeratorListsPage />,
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
            element: <ModeratorListsPage />,
          },
          {
            path: "/gifts",
            element: <GiftListsPage />,
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
