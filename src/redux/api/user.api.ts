import { TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import { TUser } from "@/types/api/auth";

type TGetUserResponse = TResponse<TUser[]>;
const userApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    // TODO: need to remove this endpoint

    getUsers: builder.query<TGetUserResponse, null>({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
    }),
    searchUserByEmail: builder.query<TGetUserResponse, null>({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
