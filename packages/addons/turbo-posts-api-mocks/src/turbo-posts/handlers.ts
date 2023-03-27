import { rest } from 'msw'
import { mockedPostsApiResult } from './mockedPosts'

export const TurboPostsApiMockedPostsHandlers = [
  rest.get('https://dummyjson.com/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...mockedPostsApiResult }))
  }),

  rest.get('https://dummyjson.com/posts/:id', (req, res, ctx) => {
    const { id } = req.params

    return res(
      ctx.status(200),
      ctx.json({
        ...mockedPostsApiResult.posts.filter(
          (p) => p.id.toString() === id && id.toString(),
        )[0],
      }),
    )
  }),
]
