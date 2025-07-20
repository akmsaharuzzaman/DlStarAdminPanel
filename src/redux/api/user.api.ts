import { Tpagination, TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import { TUser } from "@/types/api/auth";
import { TAsignCoinToUserRequestBody, TUserRewards } from "@/types/api/user";

type TGetUserResponse = TResponse<{ pagination: Tpagination; users: TUser[] }>;
type TAsignCoinToUserResponse = TResponse<TUserRewards>;
const userApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    // TODO: need to remove this endpoint

    getUsers: builder.query<TGetUserResponse, null>({
      query: () => ({
        url: "/admin/users",
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
