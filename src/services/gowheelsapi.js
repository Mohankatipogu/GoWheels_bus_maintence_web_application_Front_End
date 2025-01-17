import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gowheelsapi = createApi({
  reducerPath: 'gowheelsapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5002/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLead: builder.query({
      query: () => "/", 
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body, 
      }),
    }),
    signup:builder.mutation({
        query:(user)=>({
          url:'signup',
          method:"POST",
          body:user
        })
    }),
    addlead: builder.mutation({
      query: (body) => ({
        url: "adddriver",
        method: "POST",
        body, 
      }),
    }),
    addexpenses: builder.mutation({
      query: (body) => ({
        url: "addexpenses",
        method: "POST",
        body, 
      }), 
    }),
    upload: builder.mutation({
      query: (body) => ({
        url: "uploads",
        method: "POST",
        body, 
      }),
    }),
    deletedriver: builder.mutation({
      query: (id) => ({
        url: `deletedriver/${id}`,
        headers: {
          "token": window.localStorage.getItem('token'),
        },
        method: 'DELETE',
      }),
    }),
    updatedriver: builder.mutation({
      query: (id) => ({
        url: `editdriver/${id}`,
        headers: {
          "token": window.localStorage.getItem('token'),
        },
        method: 'PUT',
      }),
    }),
    getAllDriverList:builder.query({
      query:()=>"/busexpenses",
    }),
    getAllBusexpenses:builder.query({
      query:()=>"/getbusexpenses"
    })
  }),
});
export const { 
  useGetLeadQuery, 
  useLoginMutation,
   useSignupMutation,
  useAddleadMutation,
  useGetAllDriverListQuery ,
  useDeletedriverMutation,
  useLazyGetAllDriverListQuery,
  useAddexpensesMutation,
  useGetAllBusexpensesQuery,
  useUpdatedriverMutation,
} = gowheelsapi;
