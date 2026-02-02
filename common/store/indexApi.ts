import {
  fetchBaseQuery,
  createApi,
  BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./constApiRoute";
import type { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

// Tipe untuk baseQuery
const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
  fetchBaseQuery({
    baseUrl: BASE_URL,

    //untuk penggunaan cookie
    //untuk menerima cookie dari backend dan mengirim cookie ke backend secara otmatis
    credentials: "include",
  });

export const indexApi = createApi({
  reducerPath: "indexApi", // Menetapkan nama yang lebih jelas untuk reducerPath
  baseQuery,
  tagTypes: ["Project", "Order", "User", "Category"] as const, // Tag const untuk menjaga integritas tipe
  endpoints: () => ({}), // Endpoint kosong, bisa ditambahkan sesuai kebutuhan
});
