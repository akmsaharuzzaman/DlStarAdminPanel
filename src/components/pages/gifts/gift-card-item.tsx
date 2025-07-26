import { TGift } from "@/types/api/gift";

type TGiftCardItem = {
  gift: TGift;
};
export const GiftCardItem = ({ gift }: TGiftCardItem) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{gift?.name}</h2>
      <p>Description of Gift Item 1</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Diamonds: {gift.diamonds}
      </button>
    </div>
  );
};
