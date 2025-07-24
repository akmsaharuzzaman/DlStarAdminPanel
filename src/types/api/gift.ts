export type TGift = {
  _id: string;
  name: string;
  diamonds: number;
  coinPrice: number;
  image: string;
  createdAt: string;
  updatedAt: string;
};
// export type TGiftResponse = {
//   pagination: {
//     total: number;
//     page: number;
//     limit: number;
//     totalPage: number;
//   };
//   gifts: TGift[];
// };

export type TCreateGiftBody= {
  previewImage: File;
  giftName: string;
  diamonds: number;
  coinPrice: number;
  svgaImage: File;
  category: string;
}