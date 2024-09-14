import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie, MovieSearchResult } from './types'

const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    searchMovieByName: builder.query<MovieSearchResult, string>({
      query: (movieName) => ({
        url: '',
        params: { s: movieName, apikey: import.meta.env.VITE_OMDB_API_KEY },
      }),
    }),
    getMovieById: builder.query<Movie, string>({
      query: (movieId) => ({
        url: '',
        params: { i: movieId, apikey: import.meta.env.VITE_OMDB_API_KEY },
      }),
    }),
  }),
})
