import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
    /**
     * Define the endpoints for the auth API.
     *
     * @param {Object} builder - The builder object for defining endpoints.
     * @return {Object} An object containing the login and register endpoints.
     */
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
              url: "login",
              method: "POST",
              body,
            }),
          }),
          register: builder.mutation({
            query: (body) => ({
              url: "register",
              method: "POST",
              body,
            }),
          }),
    }),
})

export const { useLoginMutation, useRegisterMutation } = authApi