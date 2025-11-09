import { tagTypes } from "../tag.types";
import { TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import { TCreateStoreBody, TStore, TStoreCategory } from "@/types/api/store";

// type TGetAllStoreResponse = TResponse<TStore[]>;
type TGetStoresByCategoryResponse = TResponse<TStore[]>;
type TCreateStoreResponse = TResponse<TStore>;
// type TDeleteStoreResponse = TResponse<{ deleted: boolean }>;
type TGetStoreCategryResponse = TResponse<TStoreCategory[]>;
const storeApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    // gift category
    getStoreCategories: builder.query<TGetStoreCategryResponse, undefined>({
      query: () => ({
        url: `/store/categories`,
        method: "GET",
      }),
      providesTags: [tagTypes.storeCategory],
    }),
    // getAllStores: builder.query<TGetAllStoreResponse, undefined>({
    //   query: () => ({
    //     url: `/admin/gift`,
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypes.store],
    // }),

    getStoresByCategory: builder.query<TGetStoresByCategoryResponse, undefined>(
      {
        query: (categoryId) => ({
          url: `/store/items/category/${categoryId}`,
          method: "GET",
        }),
        providesTags: [tagTypes.store],
      },
    ),

    createStore: builder.mutation<TCreateStoreResponse, TCreateStoreBody>({
      query: (storeInfo) => {
        const formData = new FormData();
        formData.append("name", storeInfo.name);
        formData.append("validity", storeInfo.validity.toString());
        formData.append("price", storeInfo.price.toString());
        formData.append("svgaFile", storeInfo.svgaFile);
        formData.append("categoryId", storeInfo.categoryId);

        return {
          url: "/store/items/single",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: [tagTypes.store],
    }),
    deleteStore: builder.mutation<any, string>({
      query: (id) => ({
        url: `/store/items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.store], // Adjust tag if you use cache tags
    }),
  }),
});

export const {
  useGetStoreCategoriesQuery,
  useGetStoresByCategoryQuery,
  useCreateStoreMutation,
  useDeleteStoreMutation,
} = storeApi;
