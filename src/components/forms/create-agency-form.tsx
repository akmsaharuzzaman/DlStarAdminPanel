import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const CreateAgencyForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="create-agency-email"
          className="block text-sm font-medium text-gray-700"
        >
          Search by Email
        </label>
        <Input
          id="create-agency-email"
          type="email"
          placeholder="agency@example.com"
        />
      </div>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">
        Create Agency
      </Button>
    </div>
  );
};
