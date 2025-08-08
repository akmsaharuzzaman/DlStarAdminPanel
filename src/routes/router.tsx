import ProtectedRoute from "@/components/auth/protected-route";
import { PublicLayout } from "@/components/layout/public-layout";
import DashboardPage from "@/components/pages/dashboard";
import LoginPage from "@/components/pages/login";
import {
  GiftListsPage,
  Home,
  ModeratorListsPage,
  NotFound,
  PrivacyPolicy,
  TermsAndConditions,
  UserListsPage,
} from "../pages";
import { createBrowserRouter } from "react-router-dom";
import App from "@/pages/Demo";

const protectedChildren = [
  { path: "/", element: <DashboardPage /> },
  { path: "/user-lists", element: <UserListsPage /> },
  { path: "/agencies", element: <ModeratorListsPage /> },
  { path: "/gifts", element: <GiftListsPage /> },
];

const publicChildren = [
  { path: "/login", element: <LoginPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions /> },
];

const router = createBrowserRouter([
  {
    element: <ProtectedRoute allowedRoles={["admin", "moderator"]} />, // updated roles
    children: [{ path: "/", element: <Home />, children: protectedChildren }],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: publicChildren,
  },
  {
    path: "/demo",
    element: <App/>
  },
  { path: "*", element: <NotFound /> },
  
]);

export default router;

