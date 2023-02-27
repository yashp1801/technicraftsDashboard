import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
};

export const siteSummaryApi = createApi({
  reducerPath: "siteSummaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://envicrafts.com:8080/",
  }),
  endpoints: (builder) => ({
    getSiteSummaryData: builder.query({
      query: () => ({
        url: "sites",
        method: "GET",
        headers: headers,
      }),
    }),
    // 
    getCurrentSiteData: builder.query({
      query: (id) => ({
        url: `sites/?id=${id}`,
        method: "GET",
        headers: headers,
      }),
    }),
  }),
});

export const { useGetSiteSummaryDataQuery  , useGetCurrentSiteDataQuery} = siteSummaryApi;
