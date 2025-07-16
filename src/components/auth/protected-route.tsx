import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "@/redux/store";

export default function ProtectedRoute({ allowedRoles }: { allowedRoles: string[] }) {
  const {user, token} = useSelector((state: RootState) => state.auth);

  if (!token || !user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role)) {
    // If user is not allowed, redirect to user-lists if normal user, or dashboard if admin
    return user.role === "user" ? <Navigate to="/user-lists" replace /> : <Navigate to="/" replace />;
  }
  return <Outlet />;
}