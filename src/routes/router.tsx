import DashboardPage from "@/components/pages/dashboard";
import LoginPage from "@/components/pages/login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <div>Page not found</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
