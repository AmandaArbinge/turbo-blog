import { ITurboPostsApiPostsResult, ITurboPostsApiPost } from './types'
import { ITurboPost } from '@turbo-blog/types'

export const turboPostTransformer = (response: any) => {
  return response.json().then((data: ITurboPostsApiPost) => {
    return jsonToTurboPosts(data)
  })
}

export const turboPostsTransformer = (response: any) => {
  return response.json().then((data: ITurboPostsApiPostsResult) => {
    return data.posts.map((apiPost: ITurboPostsApiPost) =>
      jsonToTurboPosts(apiPost),
    )
  })
}

export const jsonToTurboPosts = (json: ITurboPostsApiPost): ITurboPost => {
  return {
    id: json.id,
    heading: json.title,
    content: json.body,
    tags: json.tags,
  }
}
