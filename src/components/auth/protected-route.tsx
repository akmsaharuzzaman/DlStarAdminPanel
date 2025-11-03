import { selectUser } from "@/redux/features/auth.slice";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { useGetPortalProfileQuery } from "@/redux/api/power-shared";
import { ACTIVITY_ZONES } from "@/constants/constant";

export default function ProtectedRoute({
  allowedRoles,
  children,
}: {
  allowedRoles: string[];
  children: React.ReactNode;
}) {
  const user = useAppSelector(selectUser);

  const isAdmin = user!.role === "admin";

  // ✅ Safe way: hook always runs, but query is skipped if admin
  const {
    data: portalProfile,
    isLoading,
    isFetching,
  } = useGetPortalProfileQuery(undefined, {
    skip: isAdmin, // prevents the API call, hook still mounted
  });

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorize" replace />;
  }

  // Only show loader if the query actually runs
  if (!isAdmin && (isLoading || isFetching)) {
    return <h1>Please wait for your profile...</h1>;
  }

  // Restrict based on API result (only for non-admin users)
  if (
    !isAdmin &&
    portalProfile?.result?.activityZone?.zone !== ACTIVITY_ZONES.SAFE
  ) {
    return <Navigate to="/restrict" replace />;
  }

  return <>{children}</>;
}
