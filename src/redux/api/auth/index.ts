import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<AUTH.SignInResponse, AUTH.SignInRequest>({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    signUp: build.mutation<AUTH.SignUpResponse, AUTH.SignUpRequest>({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    getMe: build.query<AUTH.GetMeResponse, AUTH.GetMeRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),

    updataProfile: build.mutation<AUTH.EditResponse, AUTH.EditRequest>({
      query: (data) => ({
        url: "/auth/update-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    forgotProfile: build.mutation<AUTH.ForgotResponse, AUTH.ForgotRequest>({
      query: (data) => ({
        url: "/auth/forgot",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useSignInMutation,
  useSignUpMutation,
  useUpdataProfileMutation,
  useForgotProfileMutation,
} = api;
