import { indexApi } from "../../../common/store/indexApi";
import { PROJECT_URL } from "../../../common/store/constApiRoute";
import { ProjectResponse } from "@/common/types/projectType";

export const projectApiSlice = indexApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query<ProjectResponse, void>({
      query: () => ({
        url: `${PROJECT_URL}/api/allproject`,
      }),
      providesTags: ["Project"],
    }),
  }),
});

export const { useGetAllProjectQuery } = projectApiSlice;
