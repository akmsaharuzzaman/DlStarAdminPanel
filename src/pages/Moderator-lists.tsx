import { ModeratorTable } from "@/components/tables/moderator-tables";
import { useGetAllModeratorUsersQuery } from "@/redux/api/moderator.api";

const ModeratorListsPage = () => {
  const { data: moderatorsData, isLoading } =
    useGetAllModeratorUsersQuery(null);
  return (
    <div className="p-4">
      <ModeratorTable
        moderatorsData={moderatorsData?.result?.users}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ModeratorListsPage;
