import { onuliveCloneDashboardBaseApi } from "./base.api";

import { tagTypes } from "../tag.types";
import { TCreateGiftBody, TGift } from "@/types/api/gift";
import { TResponse } from "@/types/api";

type TGetAllGiftResponse = TResponse<TGift[]>;
type TCreateGiftResponse = TResponse<TGift>;
type TDeleteGiftResponse = TResponse<{ deleted: boolean }>;

const giftApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGifts: builder.query<TGetAllGiftResponse, undefined>({
      query: () => ({
        url: `/admin/gift`,
        method: "GET",
      }),
      providesTags: [tagTypes.gift],
    }),
    createGift: builder.mutation<TCreateGiftResponse, TCreateGiftBody>({
      query: (giftInfo) => {
        const formData = new FormData();
        formData.append("previewImage", giftInfo.previewImage);
        formData.append("giftName", giftInfo.giftName);
        formData.append("diamonds", giftInfo.diamonds.toString());
        formData.append("coinPrice", giftInfo.coinPrice.toString());
        formData.append("svgaImage", giftInfo.svgaImage);
        formData.append("category", giftInfo.category);

        return {
          url: "/admin/gift",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: [tagTypes.gift],
    }),
    deleteGift: builder.mutation<TDeleteGiftResponse, string>({
      query: (id) => ({
        url: `/admin/gift/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Gift"], // Adjust tag if you use cache tags
    }),
  }),
});

export const { useGetAllGiftsQuery, useCreateGiftMutation, useDeleteGiftMutation } = giftApi;
