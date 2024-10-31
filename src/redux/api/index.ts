import {
  BaseQueryFn,
  fetchBaseQuery,
  createApi,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  prepareHeaders: (headers) => {
    const storedTokens = localStorage.getItem("tokens");

    if (storedTokens) {
      try {
        const tokens = JSON.parse(storedTokens);
        if (tokens && tokens.accessToken) {
          headers.set("Authorization", `Bearer ${tokens.accessToken}`);
        }
      } catch (error) {
        console.error("Ошибка парсинга токенов из localStorage", error);
      }
    }
    return headers;
  },
});

const baseQueryExtended: BaseQueryFn = async (arqs, api, extraOptions) => {
  const result = await baseQuery(arqs, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: false,
  refetchOnReconnect: false,
  tagTypes: ["auth", "post-my", "post-like"],
  endpoints: () => ({}),
});
