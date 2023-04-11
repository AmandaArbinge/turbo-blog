import { ITurboPost } from '@turbo-blog/types'
import { turboPostsApiSlice } from '../turboPostsApiSlice'
import {
  turboPostsTransformer,
  turboPostTransformer,
  addTurboTransformer,
} from './utils'
import { AddTurboPostRequestData } from './types'

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

    addTurboPost: builder.mutation<ITurboPost, AddTurboPostRequestData>({
      query(body) {
        return {
          headers: { 'Content-Type': 'application/json' },
          url: `posts/add`,
          method: 'POST',
          body: {
            title: body.heading,
            body: body.content,
            tags: body.tags,
            userId: 1,
          },
          responseHandler: addTurboTransformer,
        }
      },
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: createdPost } = await queryFulfilled

          dispatch(
            extendedTurboPostsApiSlice.util.updateQueryData(
              'getTurboPosts',

              undefined,

              (draftPosts) => {
                draftPosts?.push(createdPost)
              },
            ),
          )
        } catch {
          console.log('error')
        }
      },
    }),
  }),
})

export const {
  getRunningOperationPromises: getRunningNavigationOperationPromisesPost,
} = extendedTurboPostsApiSlice.util

export const { getTurboPosts, getTurboPost, addTurboPost } =
  extendedTurboPostsApiSlice.endpoints

export const {
  useGetTurboPostsQuery,
  useGetTurboPostQuery,
  useAddTurboPostMutation,
} = extendedTurboPostsApiSlice
