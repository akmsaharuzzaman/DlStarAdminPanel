import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormItem,
  FormField,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

type OptionType = {
  id: string;
  name: string;
};
type SelectSalaryProps<K> = {
  name: keyof K & string;
  title?: string;
  className?: string;
  options: OptionType[];
} & Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children" | "onValueChange" | "value" | "defaultValue" | "dir"
>;
export function SalarySelect<K>({
  title,
  name,
  className,
  options,
  ...props
}: SelectSalaryProps<K>) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {title && <FormLabel htmlFor={name}>{title}</FormLabel>}
          <Select {...field} {...props} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger
                id={name}
                className={cn(
                  "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive",
                  className
                )}
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((item) => (
                <SelectItem key={`${name}_${item.id}`} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
