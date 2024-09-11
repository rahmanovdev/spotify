import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPlayList: build.query<MY.PlayListResponse, MY.PlayListRequest>({
      query: () => ({
        url: "/me/playlists",
        method: "GET",
      }),
    }),
    getDetPlayList: build.query<MY.PlayDetResponse, MY.PlayDetRequest>({
      query: (playList_id) => ({
        url: `/playlists/${playList_id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPlayListQuery, useGetDetPlayListQuery } = api;
