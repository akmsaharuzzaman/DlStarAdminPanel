import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const CreateMerchangeForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="merchant-email"
          className="block text-sm font-medium text-gray-700"
        >
          Email ID
        </label>
        <Input
          id="merchant-email"
          type="email"
          placeholder="merchant@example.com"
        />
      </div>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">
        Create
      </Button>
    </div>
  );
};
