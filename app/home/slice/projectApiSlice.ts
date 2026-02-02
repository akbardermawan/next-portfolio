import { indexApi } from "../../../common/store/indexApi";
import { HOME_URL } from "../../../common/store/constApiRoute";
import { ProjectResponse } from "@/common/types/projectType";

export const projectApiSlice = indexApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjectHome: builder.query<ProjectResponse, void>({
      query: () => ({
        url: `${HOME_URL}/allproject`,
      }),
      providesTags: ["Project"],
    }),
  }),
});

export const { useGetAllProjectHomeQuery } = projectApiSlice;
