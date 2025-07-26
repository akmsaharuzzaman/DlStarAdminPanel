import { TGift } from "@/types/api/gift";
import { GiftCardItem } from "./gift-card-item";

type TGiftListProps = {
  gifts: TGift[];
};
export const GiftLists = ({ gifts }: TGiftListProps) => {
  return (
    <div>
      <h1>Gift Lists</h1>
      {/* Add your gift lists content here */}
      <p>This is where you can manage your gifts.</p>
      {/* gift item card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Example gift item card */}
        {gifts.length > 0 ? (
          gifts.map((gift) => <GiftCardItem gift={gift} />)
        ) : (
          <p>Gift no more..</p>
        )}
      </div>
      {/* Repeat for more gift items */}
    </div>
  );
};
