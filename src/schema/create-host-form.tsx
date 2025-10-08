import z from "zod";

export const createHostSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  permission: z.string().min(1, "Select a permission"),
});
export type CreateHostFormValues = z.infer<typeof createHostSchema>;
