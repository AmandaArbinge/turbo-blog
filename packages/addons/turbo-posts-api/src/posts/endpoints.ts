import { ITurboPost } from '@turbo-blog/types'
import { turboPostsApiSlice } from '../turboPostsApiSlice'
import { turboPostsTransformer, turboPostTransformer } from './utils'

export const extendedTurboPostsApiSlice = turboPostsApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTurboPosts: builder.query<ITurboPost[], void>({
      query: () => ({
        url: 'posts',
        responseHandler: turboPostsTransformer,
      }),
    }),
    getTurboPost: builder.query<ITurboPost, string>({
      query: (id) => ({
        url: `posts/${id}`,
        responseHandler: turboPostTransformer,
      }),
    }),
  }),
})

export const {
  getRunningOperationPromises: getRunningNavigationOperationPromisesPost,
} = extendedTurboPostsApiSlice.util

export const { getTurboPosts, getTurboPost } =
  extendedTurboPostsApiSlice.endpoints

export const { useGetTurboPostsQuery, useGetTurboPostQuery } =
  extendedTurboPostsApiSlice
