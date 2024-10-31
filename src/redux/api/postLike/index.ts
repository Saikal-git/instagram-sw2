import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postLikeId: build.query<
      POSTLIKE.PostLikeIdResponse,
      POSTLIKE.PostLikeIdRequest
    >({
      query: (postId) => ({
        url: `/post/get-like/${postId}`,
        method: "GET",
      }),
      providesTags: ["post-like"],
    }),

    postLike: build.mutation<
      POSTLIKE.PostLikeResponse,
      POSTLIKE.PostLikeRequest
    >({
      query: (postId) => ({
        url: `/post/like`,
        method: "POST",
        body: { postId },
      }),
      invalidatesTags: ["post-like"],
    }),

    postLikeDelete: build.mutation<
      POSTLIKE.PostLikeResponse,
      POSTLIKE.PostLikeRequest
    >({
      query: (id) => ({
        url: `/post/unlike`,
        method: "DELETE",
        body: { postId: id },
      }),
      invalidatesTags: ["post-like"],
    }),
  }),
});

export const {
  usePostLikeIdQuery,
  usePostLikeMutation,
  usePostLikeDeleteMutation,
} = api;
