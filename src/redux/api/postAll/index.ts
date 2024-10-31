import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postAll: build.query<POSTALL.PostAllResponse, POSTALL.PostAllRequest>({
      query: () => ({
        url: "/post/get-all",
        method: "GET",
      }),
      providesTags: ["post-my"],
    }),

    postCreate: build.mutation<
      POSTALL.PostCreateResponse,
      POSTALL.PostCreateRequest
    >({
      query: (data) => ({
        url: "/post/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["post-my"],
    }),

    postMy: build.query<POSTALL.PostMyResponse, POSTALL.PostMyRequest>({
      query: () => ({
        url: "/post/get-my",
        method: "GET",
      }),
      providesTags: ["post-my"],
    }),

    otherPost: build.query<
      POSTALL.OtherPostResponse,
      POSTALL.OtherPostRequest
    >({
      query: (query) => ({
        url: `/post/get-other/${query}`,
        method: "GET",
      }),
      providesTags: ["post-my"],
    }),

    postDelete: build.mutation<
      POSTALL.PostDeleteResponse,
      POSTALL.PostDeleteRequest
    >({
      query: (data) => ({
        url: `/post/delete/${data}`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["post-my"],
    }),
  }),
});

export const {
  usePostAllQuery,
  usePostCreateMutation,
  usePostMyQuery,
  useOtherPostQuery,
  usePostDeleteMutation,
} = api;
