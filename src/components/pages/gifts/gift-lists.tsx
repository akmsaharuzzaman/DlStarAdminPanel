import { TGift } from "@/types/api/gift";
import { GiftCardItem } from "./gift-card-item";

type TGiftListProps = {
  gifts: TGift[];
};

export const GiftLists = ({ gifts }: TGiftListProps) => {
  // Group gifts by category (case-insensitive)
  const giftsByCategory = gifts.reduce((acc, gift) => {
    const key = gift.category.trim().toLowerCase();
    if (!acc[key]) acc[key] = { title: gift.category, gifts: [] };
    acc[key].gifts.push(gift);
    // If the current title is lowercase but a new one is title case, update the title
    if (
      acc[key].title.toLowerCase() === key &&
      gift.category !== acc[key].title &&
      /^[A-Z]/.test(gift.category)
    ) {
      acc[key].title = gift.category;
    }
    return acc;
  }, {} as Record<string, { title: string; gifts: TGift[] }>);

  const categories = Object.values(giftsByCategory);

  return (
    <div>
      {categories.length > 0 ? (
        categories.map((cat) => (
          <div key={cat.title.toLowerCase()} className="mb-8">
            <h2 className="text-xl font-bold mb-4 capitalize">{cat.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.gifts.map((gift) => (
                <GiftCardItem key={gift._id} gift={gift} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Gift no more..</p>
      )}
    </div>
  );
};
