import { indexApi } from "../../../../common/store/indexApi";
import { LOGIN_URL } from "../../../../common/store/constApiRoute";

export const loginApiSlice = indexApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `${LOGIN_URL}`,
        method: "POST",
        body, // Mengirimkan data dalam format JSON
        headers: {
          "Content-Type": "application/json", // Pastikan headernya application/json
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApiSlice;
