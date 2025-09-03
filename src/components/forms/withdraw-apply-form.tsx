import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const sellCoinSchema = z.object({
  salary: z.string().min(1, "Salary is required"),
  paymentMethod: z.number().min(1, "Payment method must be at least 1"),
  accountNumber: z.string().min(1, "Account number is required"), // This will be set internally
});
type SellCoinFormValues = z.infer<typeof sellCoinSchema>;

const PAYMENT_METHODS = ["Bkash", "Nagad", "Rocket"];

export const WithdrawApplyForm = () => {
//   const [asignCoinToUser, { isLoading }] = useAsignCoinToUserByIdMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SellCoinFormValues>({
    resolver: zodResolver(sellCoinSchema),
    defaultValues: { salary: "", paymentMethod: 0, accountNumber: "" },
  });

  const onSubmit = async (data: SellCoinFormValues) => {
    try {
      const payload = {
        salary: data.salary,
        paymentMethod: data.paymentMethod,
        accountNumber: data.accountNumber,
      };
      console.log("Payload:", payload);

    //   const response = await asignCoinToUser(payload).unwrap();
    //   toast.success(response.message || "Coins sold successfully!");
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
        error?.data?.message || "Failed to sell coins. Please try again."
      );
      // setSuccessMsg("Failed to sell coins. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="total_salary"
          className="block text-sm font-medium text-gray-700"
        >
          Total Salary
        </label>
        <Input type="text" {...register("salary")} readOnly />
      </div>

      <div>
        <label
          htmlFor="permission"
          className="block text-sm font-medium text-gray-700"
        >
          Payment Methods
        </label>
        <select
          {...register("paymentMethod")}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Select payment methods</option>
          {PAYMENT_METHODS.map((perm) => (
            <option key={perm} value={perm}>
              {perm}
            </option>
          ))}
        </select>
        {errors.paymentMethod && (
          <p className="text-xs text-red-500 mt-1">
            {errors.paymentMethod.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="account_number"
          className="block text-sm font-medium text-gray-700"
        >
          Account Number
        </label>
        <Input
          type="number"
          placeholder="e.g, 1000"
          {...register("accountNumber", { valueAsNumber: true })}
        />
        {errors.accountNumber && (
          <p className="text-xs text-red-500 mt-1">
            {errors.accountNumber.message}
          </p>
        )}
      </div>
      {/* {isLoading ? ( */}
        <Button className="bg-green-500 text-white hover:bg-green-600" disabled>
          Processing..
        </Button>
      {/* ) : ( */}
        <Button
          type="submit"
          className="bg-green-500 text-white hover:bg-green-600"
        >
          Confirm Sale
        </Button>
      {/* )} */}
    </form>
  );
};
