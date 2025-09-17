import { TResponse } from "@/types/api";
import { onuliveCloneDashboardBaseApi } from "./base.api";
import { tagTypes } from "../tag.types";
import { TCreateSalaryBody, TSalary } from "@/types/api/salary";

type TGetSalariesResponse = TResponse<TSalary[]>;

export const salaryApi = onuliveCloneDashboardBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    // TODO: need to remove this endpoint

    // get all salaries from server
    getSalaries: builder.query<TGetSalariesResponse, any>({
      query: () => ({
        url: `/admin/salaries`,
        method: "GET",
      }),
      providesTags: [tagTypes.salary],
    }),

    // create salary with sending to server the salary body
    createSalary: builder.mutation<any, TCreateSalaryBody>({
      query: (salaryInfo) => ({
        url: "/admin/salaries",
        method: "POST",
        body: salaryInfo,
      }),
      invalidatesTags: [tagTypes.salary],
    }),

    // updating slary with taking salary id and the payload of the salary body fields
    updateSalary: builder.mutation<
      any,
      { salaryId: string; data: Partial<TCreateSalaryBody> }
    >({
      query: ({ data, salaryId }) => ({
        url: `/admin/salaries${salaryId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypes.salary],
    }),

    // deleting the salary by the salary id
    deleteSalary: builder.mutation<any, { salaryId: string }>({
      query: ({ salaryId }) => ({
        url: `/admin/salaries/${salaryId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.salary],
    }),

    // deleting the salary by the salary id
    agencySalaryAutoDistribute: builder.mutation({
      query: () => ({
        url: `/admin/agency-commission-distribute`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useGetSalariesQuery,
  useCreateSalaryMutation,
  useUpdateSalaryMutation,
  useDeleteSalaryMutation,
  useAgencySalaryAutoDistributeMutation,
} = salaryApi;
