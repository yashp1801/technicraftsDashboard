import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { overallSummaryApi } from "../Store/Slices/overallSummarySlice";
import { siteSummaryApi } from "./Slices/siteSummarySlice";
import { generateReportApi } from "./Slices/generateReportSlice";

export const store = configureStore({
  reducer: {
    [overallSummaryApi.reducer]: overallSummaryApi.reducer,
    [siteSummaryApi.reducer]: siteSummaryApi.reducer,
    [generateReportApi.reducer]: generateReportApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(siteSummaryApi.middleware),
});

setupListeners(store.dispatch);
