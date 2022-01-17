import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BooksApi = createApi({
  reducerPath: 'BooksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakerapi.it/api/v1' }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (quantity) => `/books?_quantity=${quantity}`,
    }),
  }),
})

export const { useGetBooksQuery } = BooksApi
