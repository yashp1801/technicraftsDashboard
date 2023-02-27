import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
};

export const generateReportApi = createApi({
  reducerPath: "generateReport",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://envicrafts.com:8080/",
  }),
  endpoints: (builder) => ({
    generateReportData: builder.query({
      query: () => ({
        url: "setup/category",
        method: "GET",
        headers: headers,
      }),
    }),
    siteName: builder.query({
      query: () => ({
        url: "sites",
        method: "GET",
        headers: headers,
      }),
    }),
    stationName: builder.query({
      query: (id) => ({
        url: `stations/?site=${id}`,
        method: "GET",
        headers: headers,
      }),
    }),
    parameters: builder.query({
      query: (id) => ({
        url: `parameters/?site=${id}`,
        method: "GET",
        headers: headers,
      }),
    }),
    // averageReport: builder.query({
    //   query: (
    //     startDate,
    //     endDate,
    //     siteLabel,
    //     station,
    //     selectedTimeInterval,
    //     value
    //   ) => ({
    //     url: `data/average?from=${startDate ? startDate : "null"}&to=${
    //       endDate ? endDate : "null"
    //     }&site=${siteLabel ? siteLabel : null}&station=${
    //       station ? station : null
    //     }&interval=${selectedTimeInterval}${
    //       value ? value.map((item) => `&parameters${item}`).join("") : null
    //     }`,
    //     method: "GET",
    //     headers: headers,
    //   }),
    // }),
  }),
});

export const {
  useGenerateReportDataQuery,
  useSiteNameQuery,
  useStationNameQuery,
  useParametersQuery,
} = generateReportApi;
