export type TStore = {
  _id: string;
  name: string;
  validity: number;
  categoryId: string;
  isPremium: boolean;
  price: number;
  svgaFile: string;
  deleteStatus: boolean;
  totalSold: number;
  bundleFiles: TBundleFile[];
  expireAt: string;
  createdAt: string;
  updatedAt: string;
};

export type TStoreCategory = {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TBundleFile = {
  categoryName: string;
  svgaFile: string;
  _id: string;
};

export type TCreateStoreBody = {
  name: string;
  validity: number;
  categoryId: string;
  price: number;
  svgaFile: File;
};

export type TCreateStoreCategoryBody = {
  title: string;
  isPremium: boolean;
};
