import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { tagTypesList } from "../tag.types";

const baseURL = " http://dlstarlive.com:8000/api"; // hosted server
const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  credentials: "include",
});

export const onuliveCloneDashboardBaseApi = createApi({
  reducerPath: "onuliveCloneDashboardApi",
  baseQuery,
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
