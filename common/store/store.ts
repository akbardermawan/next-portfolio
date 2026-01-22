import { configureStore } from "@reduxjs/toolkit";
import { indexApi } from "./indexApi";
import rootReducer from "./rootReducer";

// Buat konfigurasi store
const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(indexApi.middleware), // Tambahkan middleware untuk RTK Query
});

// Ekspor tipe RootState dan AppDispatch untuk digunakan dalam aplikasi
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
