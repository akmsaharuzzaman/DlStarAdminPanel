import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

export const CreateSubAdmin = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="subadmin-email"
          className="block text-sm font-medium text-gray-700"
        >
          Email ID
        </label>
        <Input
          id="subadmin-email"
          type="email"
          placeholder="subadmin@example.com"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Permissions
        </label>
        <div className="flex items-center">
          <Checkbox id="allow-sell-coin" className="text-blue-600" />
          <label
            htmlFor="allow-sell-coin"
            className="ml-2 text-sm text-gray-900"
          >
            Allow Sell Coin Permission
          </label>
        </div>
        <div className="flex items-center">
          <Checkbox id="allow-block-user" className="text-blue-600" />
          <label
            htmlFor="allow-block-user"
            className="ml-2 text-sm text-gray-900"
          >
            Allow Block User Permission
          </label>
        </div>
      </div>

      <Button className="bg-blue-500 text-white hover:bg-blue-600">
        Create
      </Button>
    </div>
  );
};
