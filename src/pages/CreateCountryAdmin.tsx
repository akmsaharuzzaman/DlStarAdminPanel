

import { CreateCountryAdminForm } from "@/components/forms/create-country-admin-form";
import { BackRouteHeader } from "@/components/shared/back-route-header";

type CreateCountryAdminPageProps = {
  backRoute: string;
};
export const CreateCountryAdminPage: React.FC<CreateCountryAdminPageProps> = ({
  backRoute = "/",
}) => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Create Country Admin</h1>
        <BackRouteHeader backRoute={backRoute} />
      </div>
      <div className="space-y-4">
        <CreateCountryAdminForm  />
      </div>
    </div>
  );
};
