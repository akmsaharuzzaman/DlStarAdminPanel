import { selectUser } from "@/redux/features/auth.slice";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";

export default function ProtectedRoute({
  allowedRoles,
  children,
}: {
  allowedRoles: string[];
  children: React.ReactNode;
}) {
  const user = useAppSelector(selectUser);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorize" replace />;
  }
  return <>{children}</>;
}
