import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
};

export const overallSummaryApi = createApi({
  reducerPath: "overallSummary",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://envicrafts.com:8080/",
  }),
  endpoints: (builder) => ({
    getStateWiseCount: builder.query({
      query: () => ({
        url: "sites/site-statuswise-count",
        method: "GET",
        headers: headers,
      }),
    }),
    getTotalStations: builder.query({
      query: () => ({
        url: "stations/station-count",
        method: "GET",
        headers: headers,
      }),
    }),
    getTotalParameters: builder.query({
      query: () => ({
        url: "parameters/total-parameters",
        method: "GET",
        headers: headers,
      }),
    }),
  }),
});

export const {
  useGetStateWiseCountQuery,
  useGetTotalStationsQuery,
  useGetTotalParametersQuery,
} = overallSummaryApi;
