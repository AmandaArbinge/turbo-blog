import { ITurboPostApiResult, ITurboPostApiPosts } from './types'
import { ITurboPost } from '@turbo-blog/types'

export const turboPostTransformer = (response: any) => {
  return response.json().then((data: ITurboPostApiPosts) => {
    return jsonToTurboPosts(data)
  })
}

export const turboPostsTransformer = (response: any) => {
  return response.json().then((data: ITurboPostApiResult) => {
    return data.posts.map((apiPost: ITurboPostApiPosts) =>
      jsonToTurboPosts(apiPost),
    )
  })
}

export const jsonToTurboPosts = (json: ITurboPostApiPosts): ITurboPost => {
  return {
    id: json.id,
    heading: json.title,
    content: json.body,
    tags: json.tags,

  }
}
