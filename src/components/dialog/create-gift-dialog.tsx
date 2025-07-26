import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { TCreateGiftBody } from "@/types/api/gift";
import { useCreateGiftMutation } from "@/redux/api/gift.api";

const createGiftSchema = z.object({
  previewImage: z.file(),
  giftName: z.string(),
  diamonds: z.number().min(1, "Amount must be at least 1"),
  coinPrice: z.number().min(1, "Amount must be at least 1"),
  svgaImage: z.file(),
  category: z.string(),
});

type CreateGiftFormValues = z.infer<typeof createGiftSchema>;

type CreateGiftDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function CreateGiftDialog({ open, onClose }: CreateGiftDialogProps) {
  const [successMsg, setSuccessMsg] = useState("");
  const [createGift, { isLoading }] = useCreateGiftMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CreateGiftFormValues>({
    resolver: zodResolver(createGiftSchema),
    defaultValues: { giftName: "", diamonds: 0, coinPrice: 0, category: "" },
  });

  const onSubmit = async (data: CreateGiftFormValues) => {
    try {
      const payload: TCreateGiftBody = {
        giftName: data.giftName,
        category: data.category,
        coinPrice: data.coinPrice,
        diamonds: data.diamonds,
        previewImage: data.previewImage,
        svgaImage: data.svgaImage,
      };
      if (!data.previewImage || !data.svgaImage) {
        toast.error("Please upload both preview and SVGA images.");
        return;
      }
      console.log("Creating gift with payload:", payload);
      const response = await createGift(payload).unwrap();
      console.log("response", response);
      toast.success(response.message);
      setSuccessMsg(
        `Successfully added ${data.giftName} gift to category of ${data?.category}`
      );
      setTimeout(() => {
        onClose();
        setSuccessMsg("");
        reset();
      }, 1500);
    } catch (error: any) {
      console.log(error);
      toast.error(
        error?.data?.message || "Failed to create gift. Please try again."
      );
      setSuccessMsg("Failed to create gift. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 text-xl"
          onClick={() => {
            onClose();
            reset();
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-pink-500">Create Gift</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gift Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register("giftName")}
            />
            {errors.giftName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.giftName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diamonds
            </label>
            <input
              type="number"
              min={1}
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register("diamonds", { valueAsNumber: true })}
            />
            {errors.diamonds && (
              <p className="text-xs text-red-500 mt-1">
                {errors.diamonds.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coin Price
            </label>
            <input
              type="number"
              min={1}
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register("coinPrice", { valueAsNumber: true })}
            />
            {errors.coinPrice && (
              <p className="text-xs text-red-500 mt-1">
                {errors.coinPrice.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register("category")}
            />
            {errors.category && (
              <p className="text-xs text-red-500 mt-1">
                {errors.category.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preview Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded px-3 py-2"
              onChange={(e) =>
                setValue("previewImage", e.target.files?.[0] as File)
              }
            />
            {errors.previewImage && (
              <p className="text-xs text-red-500 mt-1">
                {errors.previewImage.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SVGA Image
            </label>
            <input
              type="file"
              accept=".svga"
              className="w-full border border-gray-300 rounded px-3 py-2"
              onChange={(e) =>
                setValue("svgaImage", e.target.files?.[0] as File)
              }
            />
            {errors.svgaImage && (
              <p className="text-xs text-red-500 mt-1">
                {errors.svgaImage.message}
              </p>
            )}
          </div>
          {isLoading ? (
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded mt-2"
              disabled
            >
              Creating gift...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded mt-2"
            >
              Create Gift
            </button>
          )}
          {successMsg && (
            <p className="text-green-600 text-sm mt-2 text-center">
              {successMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
