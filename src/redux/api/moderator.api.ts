import { Tpagination, TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import { TUser } from "@/types/api/auth";

type TGetUserResponse = TResponse<{ users: TUser[]; pagination: Tpagination }>;
const moderatorApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    // TODO: need to remove this endpoint

    getAllModeratorUsers: builder.query<TGetUserResponse, null>({
      query: () => ({
        url: "/admin/users/moderators",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllModeratorUsersQuery } = moderatorApi;
