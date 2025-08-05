import { ModeratorTable } from "@/components/tables/moderator-tables";
import { useGetAllModeratorUsersQuery } from "@/redux/api/moderator.api";

export const ModeratorListsPage = () => {
  const { data: moderatorsData, isLoading } =
    useGetAllModeratorUsersQuery(null);
  return (
    <div className="p-4">
      <div className="mb-4 max-w-xs">
        <h1 className="text-2xl font-bold">Moderator Lists</h1>
      </div>
      <ModeratorTable
        moderatorsData={moderatorsData?.result?.users}
        isLoading={isLoading}
      />
    </div>
  );
};
