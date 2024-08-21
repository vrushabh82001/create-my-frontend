import { authApi } from "@/api/auth";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";


const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    /**
     * Middleware for the Redux store.
     *
     * The `getDefaultMiddleware` function returns an array of middleware
     * functions, including `serializableCheck` middleware which checks
     * if the state is serializable. We disable this check as it conflicts
     * with the `@reduxjs/toolkit/query` library.
     *
     * We also concatenate the `authApi.middleware` function to handle
     * requests made using the `authApi` created by `createApi`.
     *
     * @param {function} getDefaultMiddleware - A function that returns
     * an array of middleware functions.
     * @return {Array} An array of middleware functions.
     */
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(authApi.middleware), // Add `authApi.middleware` to handle requests made using the `authApi`
});

setupListeners(store.dispatch);

export default store;