import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { nbaDataApi } from "./Features/Api/apiSlice";

export const store = configureStore({
  reducer: {
    [nbaDataApi.reducerPath]: nbaDataApi.reducer,
  },

  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(nbaDataApi.middleware),
});

setupListeners(store.dispatch);
