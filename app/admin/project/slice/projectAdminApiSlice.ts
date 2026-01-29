import { indexApi } from "../../../../common/store/indexApi";
import { PROJECT_URL } from "../../../../common/store/constApiRoute";
import { ProjectResponse } from "@/common/types/projectType";

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
    getAllProjectAdm: builder.query<ProjectResponse, void>({
      query: () => ({
        url: `${PROJECT_URL}/allproject`,
      }),
      providesTags: ["Project"],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `${PROJECT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Project", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetAllProjectAdmQuery,
  useDeleteProjectMutation,
} = projectAdminApiSlice;
