import { onuliveCloneDashboardBaseApi } from "./base.api";
import {
  TChangePassword,
  TForgetPassword,
  TLoginBody,
  TResetPassword,
} from "@/types/api/auth";

const authApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo: TLoginBody) => ({
        url: "/auth/login",
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
  }),
});

export const {
  useLoginMutation,
  useResetPasswordMutation,
  useForgetPasswordMutation,
  useChangePasswordMutation,
} = authApi;
