import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    searchTracks: build.query<
      SEARCH.GetSearchTracksResponse,
      SEARCH.GetSearchTracksRequest
    >({
      query: (query) => ({
        url: "/search",
        method: "GET",
        params: {
          q: query,
          type: "track",
          limit: 10,
        },
      }),
      providesTags: ["search"],
    }),
  }),
});

export const { useSearchTracksQuery } = api;
