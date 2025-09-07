import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ActionTinyButton } from "../buttons/action-tiny-buttons";
import { useCreateSalaryMutation } from "@/redux/api/salaries.api";
import { toast } from "sonner";

const formSchema = z.object({
  diamondCount: z.number({ message: "Diamond count is required" }).min(1),
  moneyCount: z.number({ message: "Money count is required" }).min(1),
  type: z.string().min(2, "Type is required"),
  country: z.string().min(2, "Country is required"),
});

type FormValues = z.infer<typeof formSchema>;

export const CreateSalaryForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      diamondCount: 0,
      moneyCount: 0,
      type: "",
      country: "",
    },
  });
  const [createSalary, { isLoading: createSalaryLoading }] =
    useCreateSalaryMutation();

  const onSubmit = async (values: FormValues) => {
    console.log(values, "form values");
    try {
      const salaryBody = {
        diamondCount: values.diamondCount,
        moneyCount: values.moneyCount,
        type: values.type,
        country: values.country,
      };
      const res = await createSalary(salaryBody).unwrap();
      toast.success(res.message || "Salary created");
      form.reset();
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message || err.message || "cannot created salary");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <FormField
          control={form.control}
          name="diamondCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diamond Count</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter diamond count"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="moneyCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Money Count</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter money count"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input placeholder="e.g., video/live" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="e.g., USD, EUR" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="md:col-span-2 flex justify-end">
          <ActionTinyButton type="submit" disabled={createSalaryLoading}>
            {createSalaryLoading ? "Creating salary..." : "Create"}
          </ActionTinyButton>
        </div>
      </form>
    </Form>
  );
};
