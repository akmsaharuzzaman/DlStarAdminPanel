import { Tpagination, TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import {
  TCreatePortalRoleBody,
  TLoginBody,
  TTransactionAdminHistory,
  TUser,
  TWidrawRequest,
} from "@/types/api/auth";
import { tagTypes } from "../tag.types";
import { TAdminProfile } from "@/types/pages/admin";

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
    adminProfile: builder.query<TResponse<TAdminProfile>, void>({
      query: () => ({
        url: "/admin/auth",
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.coin],
    }),
    myProfile: builder.query<TResponse<TUser>, void>({
      query: () => ({
        url: "/auth/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getHostsWithdrawRequests: builder.query<
      TResponse<{ pagination: Tpagination; data: TWidrawRequest[] }>,
      { limit?: number; page?: number }
    >({
      query: ({ limit = 99999, page = 1 }) => ({
        url: `/admin/withdraw-requests?limit=${limit}&page=${page}`,
        method: "GET",
      }),
      providesTags: [tagTypes.withdraw],
    }),
    acceptHostWithdrawReqStatus: builder.mutation({
      query: ({ withdrawId }) => ({
        url: `/admin/withdraw-requests/${withdrawId}`,
        method: "PUT",
        body: {
          status: "accepted",
        },
      }),
      invalidatesTags: [tagTypes.withdraw],
    }),
    getAgencyWithdrawRequests: builder.query<
      TResponse<{ pagination: Tpagination; data: TWidrawRequest[] }>,
      { page?: number; limit?: number }
    >({
      query: ({ limit = 99999, page = 1 }) => ({
        url: `/admin/agency-withdraw?limit=${limit}&page=${page}`,
        method: "GET",
      }),
      providesTags: [tagTypes.withdraw],
    }),
    acceptAgencyWithdrawReqStatus: builder.mutation({
      query: ({ withdrawId }) => ({
        url: `/admin/agency-withdraw/${withdrawId}`,
        method: "PUT",
        body: {
          status: "accepted",
        },
      }),
      invalidatesTags: [tagTypes.withdraw],
    }),
    updateRole: builder.mutation({
      query: ({ userId, newRole }: { userId: string; newRole: string }) => ({
        url: `/admin/user/asign-role/${newRole}`,
        method: "PUT",
        body: { userId },
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getDashboardStats: builder.query<
      TResponse<{
        users: number;
        subAdmins: number;
        merchants: number;
        countryAdmins: number;
        agencies: number;
        hosts: number;
        resellers: number;
      }>,
      void
    >({
      query: () => ({
        url: "/admin/dashboard/stats",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    addCoinForAdmin: builder.mutation<TResponse<TUser>, { coins: number }>({
      query: ({ coins }) => ({
        url: "/admin/auth/assign-coin",
        method: "PUT",
        body: { coins },
      }),
      invalidatesTags: [tagTypes.coin],
    }),
    getAdminTransactions: builder.query<
      TResponse<{
        pagination: Tpagination;
        data: TTransactionAdminHistory[];
      }>,
      void
    >({
      query: () => ({
        url: "/admin/transaction-admin",
        method: "GET",
      }),
      providesTags: [tagTypes.transaction],
    }),
    getPortalUserTransactions: builder.query<
      TResponse<{
        pagination: Tpagination;
        data: TTransactionAdminHistory[];
      }>,
      { userId: string }
    >({
      query: ({ userId }) => ({
        url: `/admin/transaction-portal-user/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.transaction],
    }),
  }),
});

export const {
  useLoginMutation,
  useAdminRegisterMutation,
  useUpdateAdminMutation,
  useGetGiftCategoriesQuery,
  useCreatePortalUserMutation,
  useAdminProfileQuery,
  useMyProfileQuery,
  useGetHostsWithdrawRequestsQuery,
  useAcceptHostWithdrawReqStatusMutation,
  useGetAgencyWithdrawRequestsQuery,
  useAcceptAgencyWithdrawReqStatusMutation,
  useUpdateRoleMutation,
  useGetDashboardStatsQuery,
  useAddCoinForAdminMutation,
  useGetAdminTransactionsQuery,
  useGetPortalUserTransactionsQuery,
} = authApi;
