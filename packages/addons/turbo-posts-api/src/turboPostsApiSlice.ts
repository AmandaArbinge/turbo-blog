// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const dummyUrl = 'https://dummyjson.com/'

// Define our single API slice object
export const turboPostsApiSlice = createApi({
  reducerPath: 'turboPostsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: dummyUrl,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },

  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({}),
})
