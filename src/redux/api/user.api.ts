import { Tpagination, TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import { TUser } from "@/types/api/auth";
import { TAsignCoinToUserRequestBody, TUserRewards } from "@/types/api/user";

type TGetUserResponse = TResponse<{ pagination: Tpagination; users: TUser[] }>;
type TAsignCoinToUserResponse = TResponse<TUserRewards>;
const userApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    // TODO: need to remove this endpoint

    getUsers: builder.query<TGetUserResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 } = {}) => ({
        url: `/admin/users?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
    asignCoinToUserById: builder.mutation<
      TAsignCoinToUserResponse,
      TAsignCoinToUserRequestBody
    >({
      query: (userInfo) => ({
        url: "/admin/users/assign-coin",
        method: "PUT",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAsignCoinToUserByIdMutation } = userApi;
