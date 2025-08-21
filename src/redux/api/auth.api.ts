import { TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import { TCreatePortalRoleBody, TLoginBody, TUser } from "@/types/api/auth";
import { tagTypes } from "../tag.types";

type TLoginResponse = TResponse<TUser[]> & { access_token: string };
type TGetGiftCategryResponse = TResponse<string[]>;
const authApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TLoginResponse, TLoginBody>({
      query: (userInfo) => ({
        url: "/admin/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    adminRegister: builder.mutation({
      query: (adminInfo) => ({
        url: "/admin/auth",
        method: "POST",
        body: adminInfo,
      }),
    }),
    updateAdmin: builder.mutation({
      query: (adminInfo: { coins: number }) => ({
        url: "/admin/auth",
        method: "PUT",
        body: {
          coins: adminInfo.coins,
        },
      }),
    }),
    // gift category
    getGiftCategories: builder.query<TGetGiftCategryResponse, undefined>({
      query: () => ({
        url: `/admin/gift-category`,
        method: "GET",
      }),
      providesTags: [tagTypes.giftCategory],
    }),

    // creating portal user with role and permissions also
    createPortalUser: builder.mutation({
      query: (portalUserInfo: TCreatePortalRoleBody) => ({
        url: "/admin/create-role",
        method: "POST",
        body: portalUserInfo,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useLoginMutation,
  useAdminRegisterMutation,
  useUpdateAdminMutation,
  useGetGiftCategoriesQuery,
  useCreatePortalUserMutation
} = authApi;
