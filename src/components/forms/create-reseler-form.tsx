import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const CreateReselerForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="reseler-email"
          className="block text-sm font-medium text-gray-700"
        >
          Email ID
        </label>
        <Input
          id="reseler-email"
          type="email"
          placeholder="reseller@example.com"
        />
      </div>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">
        Create
      </Button>
    </div>
  );
};
