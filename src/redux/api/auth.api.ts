import { TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import { TLoginBody, TUser } from "@/types/api/auth";

type TLoginResponse = TResponse<TUser[]> & { access_token: string };
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
    // resetPassword: builder.mutation({
    //   query: (userInfo: TResetPassword) => ({
    //     url: "/auth/reset-password",
    //     method: "PATCH",
    //     body: userInfo,
    //   }),
    // }),
    // forgetPassword: builder.mutation({
    //   query: (emailInfo: TForgetPassword) => ({
    //     url: "/auth/forgot-password",
    //     method: "POST",
    //     body: emailInfo,
    //   }),
    // }),
    // changePassword: builder.mutation({
    //   query: (emailInfo: TChangePassword) => ({
    //     url: "/auth/change-password",
    //     method: "POST",
    //     body: emailInfo,
    //   }),
    // }),
  }),
});

export const {
  useLoginMutation,
  useAdminRegisterMutation,
  useUpdateAdminMutation,
} = authApi;
