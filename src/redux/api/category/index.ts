import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<
      CATEGORIES.GetCategoriesResponse,
      CATEGORIES.GetCategoriesRequest
    >({
      query: () => ({
        url: "/browse/categories",
        method: "GET",
      }),
    }),
    getCategory: build.query<
      CATEGORIES.GetCategoryResponse,
      CATEGORIES.GetCategoryRequest
    >({
      query: (category_id) => ({
        url: `/browse/categories/${category_id}
`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = api;
