import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import z from "zod";
import { SalarySelect } from "../select/salary-select";
const SALARIES = [
  { id: "us", name: "United States" },
  { id: "uk", name: "United Kingdom" },
  { id: "ca", name: "Canada" },
  { id: "au", name: "Australia" },
  { id: "fr", name: "France" },
  { id: "de", name: "Germany" },
  { id: "jp", name: "Japan" },
  { id: "br", name: "Brazil" },
];
const sellCoinSchema = z.object({
  salary: z.string().min(1, "Salary is required"),
  paymentMethod: z.string().min(1, "Select a payment method"),
  accountNumber: z.number().min(1, "Account number is required"),
});
type SellCoinFormValues = z.infer<typeof sellCoinSchema>;

const PAYMENT_METHODS = ["Bkash", "Nagad", "Rocket"];

export const WithdrawApplyForm = () => {
  const form = useForm<SellCoinFormValues>({
    resolver: zodResolver(sellCoinSchema),
    defaultValues: {
      salary: "",
      paymentMethod: "",
      accountNumber: 0,
    },
  });

  const onSubmit = async (data: SellCoinFormValues) => {
    try {
      const payload = {
        salary: data.salary,
        paymentMethod: data.paymentMethod,
        accountNumber: data.accountNumber,
      };
      console.log("Payload:", payload);

      // await asignCoinToUser(payload).unwrap();
      // toast.success("Coins sold successfully!");

      setTimeout(() => {
        form.reset();
      }, 1500);
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Failed to sell coins. Please try again."
      );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-md"
      >
        {/* Salary Field */}
        <SalarySelect
          name="country"
          title="Select salary"
          options={SALARIES}
        />

        {/* Payment Method Select */}
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PAYMENT_METHODS.map((method) => (
                    <SelectItem key={method} value={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Account Number Field */}
        <FormField
          control={form.control}
          name="accountNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Number</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g: 1000 5481 6548"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Buttons */}
        <div className="flex gap-x-4 items-center">
          <Button
            type="reset"
            variant="destructive"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-green-500 text-white hover:bg-green-600"
          >
            Withdraw
          </Button>
        </div>
      </form>
    </Form>
  );
};
