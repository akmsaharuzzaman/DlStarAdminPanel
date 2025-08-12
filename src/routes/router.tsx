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
  DashboardPage as DashboardRoute,
} from "../pages";
import { createBrowserRouter } from "react-router-dom";
import SubAdmin from "@/pages/Sub-admin";
// import Demo from "@/pages/Demo";
import DemoLayout from "@/components/layout/demo-layout";
import Users from "@/pages/Users";
import SubAdminById from "@/pages/SubAdminById";
import AgencyById from "@/pages/AgencyById";
import Reseller from "@/pages/Reseller";
import Merchant from "@/pages/Merchant";
// import App from "@/pages/Demo";

const protectedChildren = [
  { path: "/", element: <DashboardPage /> },
  { path: "/user-lists", element: <UserListsPage /> },
  { path: "/agencies", element: <ModeratorListsPage /> },
  { path: "/gifts", element: <GiftListsPage /> },
  {
    path: "/sub-admins",
    element: <SubAdmin />,
  },
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
    element: <DemoLayout />,
    children: [
      {
        path: "",
        element: <DashboardRoute />,
      },
      {
        path: "sub-admins",
        element: <SubAdmin />,
      },
      {
        path: "sub-admins/:subAdminId", // show agency lists on table format by subAdminId
        element: <SubAdminById />,
      },
      {
        path: "agencies/:agencyId", // show hosts lists in table by agencyId
        element: <AgencyById />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "merchants", // show all merchant
        element: <Merchant />,
      },
      {
        path: "merchants/:merchantId", // show merchant details by merchantId
        element: <Reseller />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
