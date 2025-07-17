export type TUserRewards = {
  _id: string;
  userId: string;
  stars: number;
  diamonds: number;
  levels: number;
  gifts: {
    gift: string;
    count: number;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAsignCoinToUserRequestBody = {
  userId: string;
  coins: number;
};
