import { indexApi } from "../../../../common/store/indexApi";
import { PROJECT_URL } from "../../../../common/store/constApiRoute";

export const projectAdminApiSlice = indexApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (body) => ({
        url: `${PROJECT_URL}`,
        method: "POST",
        body, // Mengirimkan data dalam format JSON
        headers: {
          "Content-Type": "application/json", // Pastikan headernya application/json
        },
      }),
    }),
  }),
});

export const { useCreateProjectMutation } = projectAdminApiSlice;
