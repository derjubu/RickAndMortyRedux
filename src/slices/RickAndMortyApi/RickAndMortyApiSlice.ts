import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const RickAndMortyApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (builder) => ({
    getRickAndMortyCharacters: builder.query({
      query: (page) => `/character/?page=${page}`,
    }),
  }),
})

export const { useGetRickAndMortyCharactersQuery } = RickAndMortyApiSlice
