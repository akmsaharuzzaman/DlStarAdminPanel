import { TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import {
  TChangePassword,
  TForgetPassword,
  TLoginBody,
  TResetPassword,
  TUser,
} from "@/types/api/auth";

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
    resetPassword: builder.mutation({
      query: (userInfo: TResetPassword) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: userInfo,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (emailInfo: TForgetPassword) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: emailInfo,
      }),
    }),
    changePassword: builder.mutation({
      query: (emailInfo: TChangePassword) => ({
        url: "/auth/change-password",
        method: "POST",
        body: emailInfo,
      }),
    }),

    // TODO: need to remove this endpoint
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
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
  }),
});

export const {
  useLoginMutation,
  useResetPasswordMutation,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useAdminRegisterMutation,
} = authApi;
