import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const SellCoinForm = () => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="sell-email"
          className="block text-sm font-medium text-gray-700"
        >
          Search by Email
        </label>
        <Input id="sell-email" type="email" placeholder="user@example.com" />
      </div>
      <div>
        <label
          htmlFor="sell-amount"
          className="block text-sm font-medium text-gray-700"
        >
          Coin Amount
        </label>
        <Input id="sell-amount" type="number" placeholder="1000" />
      </div>
      <Button className="bg-green-500 text-white hover:bg-green-600">
        Confirm Sale
      </Button>
    </div>
  );
};
