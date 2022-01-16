import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rickAndMortyApi = createApi({
  reducerPath: 'RickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page = 1) => `/character?page=${page}`,
    }),
  }),
})

export const { useGetCharactersQuery } = rickAndMortyApi
