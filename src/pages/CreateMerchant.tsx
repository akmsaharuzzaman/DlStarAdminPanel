
import { CreateMerchantForm } from "@/components/forms/create-merchant-form";
import { BackRouteHeader } from "@/components/shared/back-route-header";

type GiftListsPageProps = {
  backRoute: string;
};
export const CreateMerchantPage: React.FC<GiftListsPageProps> = ({
  backRoute = "/",
}) => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Create Merchant</h1>
        <BackRouteHeader backRoute={backRoute} />
      </div>
      <div className="space-y-4">
        <CreateMerchantForm  />
      </div>
    </div>
  );
};
