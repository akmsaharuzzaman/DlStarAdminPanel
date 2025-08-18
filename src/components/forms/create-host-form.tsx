import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const CreateHostForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="create-host-email"
          className="block text-sm font-medium text-gray-700"
        >
          Search by Email
        </label>
        <Input
          id="create-host-email"
          type="email"
          placeholder="host@example.com"
        />
      </div>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">
        Create Host
      </Button>
    </div>
  );
};
