import { Coins, Sparkles, Trash} from "lucide-react";
import { TGift } from "@/types/api/gift";
import { ActionTinyButton } from "../buttons/action-tiny-buttons";
import { useDeleteGiftMutation } from "@/redux/api/gift.api";
import { toast } from "sonner";

type GiftCardProps = {
  gift: TGift;
};

export const GiftCard: React.FC<GiftCardProps> = ({ gift }) => {
  const [deleteGift, { isLoading }] = useDeleteGiftMutation();
  //   const [open, setOpen] = React.useState(false);

  const handleDelete = async () => {
    try {
      const res = await deleteGift(gift._id).unwrap();
      toast.success(res.message || "Gift deleted successfully!");
      //   setOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to delete gift.");
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-1 transition-transform duration-300">
      <img
        src={gift.previewImage}
        alt={gift.name}
        className="w-full h-32 object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src =
            "https://placehold.co/100x100/cccccc/ffffff?text=Error";
        }}
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{gift.name}</h4>
        <div className="flex items-center text-gray-600 mt-1">
          <Coins size={14} className="mr-1 text-yellow-500" />
          <span>{gift.coinPrice}</span>
        </div>
        <div className="flex items-center text-gray-600 mt-1">
          <Sparkles size={14} className="mr-1 text-blue-500" />
          <span>{gift.diamonds} Diamonds</span>
        </div>
      </div>
      <div className="p-2 bg-gray-50 flex justify-end gap-x-4 items-center">
        {/* <ActionTinyButton variant="secondary" className="py-1 pl-2 text-xs">
        <Edit size={16} className="mr-2" /> Edit
      </ActionTinyButton> */}
        <ActionTinyButton variant="danger" className="py-1 px-2 text-xs" onClick={handleDelete} disabled={isLoading}>
          {
            isLoading ? "Deleting..." : <><Trash size={16} className="mr-2" /> Delete</>
          }
        </ActionTinyButton>
      </div>
    </div>
  );
};
