import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAsignCoinToUserByIdMutation } from "@/redux/api/power-shared";

const sellCoinSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  coinAmount: z.number().min(1, "Amount must be at least 1"),
  userRole: z.string().min(1, "User role is required"), // This will be set internally
});
type SellCoinToPortalFormValues = z.infer<typeof sellCoinSchema>;

export const SellCoinToMerchantForm = () => {
  const [asignCoinToUser, { isLoading }] = useAsignCoinToUserByIdMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SellCoinToPortalFormValues>({
    resolver: zodResolver(sellCoinSchema),
    defaultValues: { userId: "", coinAmount: 1, userRole: "" },
  });

  const onSubmit = async (data: SellCoinToPortalFormValues) => {
    try {
      const payload = {
        userId: data.userId,
        coins: data.coinAmount,
        userRole: data.userRole || "user", // Default to "user" if not set
      };

      const response = await asignCoinToUser(payload).unwrap();
      toast.success(response.message || "Coins sold successfully!");
      // setSuccessMsg(
      //   `Successfully added ${data.coinAmount} coins to user ${data.userId}`
      // );
      setTimeout(() => {
        // onClose();
        // setSuccessMsg("");
        reset();
      }, 1500);
    } catch (error: any) {
      console.log(error);
      toast.error(
        error?.data?.message ||
          error?.message ||
          "Failed to sell coins. Please try again."
      );
      // setSuccessMsg("Failed to sell coins. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="sell-email"
          className="block text-sm font-medium text-gray-700"
        >
          User ID
        </label>
        <Input type="text" {...register("userId")} readOnly />
      </div>
      <div>
        <label
          htmlFor="sell-amount"
          className="block text-sm font-medium text-gray-700"
        >
          Coin Amount
        </label>
        <Input
          type="number"
          placeholder="e.g, 1000"
          {...register("coinAmount", { valueAsNumber: true })}
        />
        {errors.coinAmount && (
          <p className="text-xs text-red-500 mt-1">
            {errors.coinAmount.message}
          </p>
        )}
      </div>
      {isLoading ? (
        <Button className="bg-green-500 text-white hover:bg-green-600" disabled>
          Processing..
        </Button>
      ) : (
        <Button
          type="submit"
          className="bg-green-500 text-white hover:bg-green-600"
        >
          Confirm Sale
        </Button>
      )}
    </form>
  );
};
