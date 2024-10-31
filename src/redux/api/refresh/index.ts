import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    refreshAccessToken: build.mutation<
      REFRESH.RefreshTokenResponse,
      REFRESH.RefreshTokenRequest
    >({
      query: (refreshToken) => ({
        url: "/auth/refresh",
        method: "PATCH",
        body: { refreshToken },
      }),
    }),
  }),
});

export const { useRefreshAccessTokenMutation } = api;
