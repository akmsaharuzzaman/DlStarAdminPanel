import { TGift } from "@/types/api/gift";
import { Edit, Trash2 } from "lucide-react";
import { useDeleteGiftMutation } from "@/redux/api/gift.api";
import { toast } from "sonner";
import * as React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

type TGiftCardItem = {
  gift: TGift;
};
export const GiftCardItem = ({ gift }: TGiftCardItem) => {
  const [deleteGift, { isLoading }] = useDeleteGiftMutation();
  const [open, setOpen] = React.useState(false);

  const handleDelete = async () => {
    try {
      await deleteGift(gift._id).unwrap();
      toast.success("Gift deleted successfully!");
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to delete gift.");
    }
  };

  return (
    <div className="border p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <img
            src={gift.previewImage}
            alt={`Gift image of ${gift.name}`}
            className="w-full object-cover rounded mb-2"
          />
        </div>
        <div className="flex flex-col gap-4 text-center w-1/2">
          <h4 className="text-xl font-semibold">Coin: {gift.coinPrice} </h4>
          <div className="flex justify-center items-center gap-x-2">
            <Edit className="cursor-pointer text-blue-500" />
            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogTrigger asChild>
                <Trash2
                  className={`cursor-pointer text-red-500 ${
                    isLoading ? "opacity-50 pointer-events-none" : ""
                  }`}
                />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Gift?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete this gift? This action
                    cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isLoading}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    disabled={isLoading}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};
