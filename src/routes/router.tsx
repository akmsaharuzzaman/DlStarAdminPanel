import ProtectedRoute from "@/components/auth/protected-route";
import { PublicLayout } from "@/components/layout/public-layout";
import DashboardPage from "@/components/pages/dashboard";
import LoginPage from "@/components/pages/login";
import {
  GiftListsPage,
  ModeratorListsPage,
  NotFoundPage,
  PrivacyPolicy,
  TermsAndConditions,
  UserListsPage,
} from "../pages";
import { createBrowserRouter } from "react-router-dom";
import SubAdmin from "@/pages/Sub-admin";
// import Demo from "@/pages/Demo";
import DemoLayout from "@/components/layout/demo";
import RootLayout from "@/components/layout/root";
import { appRoutes } from "./app-routes";
import UnauthorizedPage from "@/pages/Unauthorize";

const protectedChildren = [
  { path: "", element: <DashboardPage /> },
  { path: "user-lists", element: <UserListsPage /> },
  { path: "agencies", element: <ModeratorListsPage /> },
  { path: "gifts", element: <GiftListsPage /> },
  {
    path: "sub-admins",
    element: <SubAdmin />,
  },
];



const publicChildren = [
  { path: "/login", element: <LoginPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions /> },
];



const protectedRoutes = appRoutes.map((route) => ({
  path: route.path,
  element: (
    <ProtectedRoute allowedRoles={route.roles}>
      {route.element}
    </ProtectedRoute>
  ),
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      ...protectedRoutes
    ]
  },
  {
    path: "/unauthorize",
    element: <UnauthorizedPage />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: publicChildren,
  },
  {
    path: "/demo",
    element: <DemoLayout />,
    children: protectedChildren
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
