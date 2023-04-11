import {
  ITurboPostsApiPostsResult,
  ITurboPostsApiPost,
  ITurboPostsApiCreatePostResult,
} from './types'
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

export const addTurboTransformer = (response: any) => {
  return response.json().then((data: ITurboPostsApiCreatePostResult) => {
    return jsonAddToTurboPost(data)
  })
}

export const jsonAddToTurboPost = (
  json: ITurboPostsApiCreatePostResult,
): ITurboPost => {
  return {
    id: json.id,
    heading: json.title,
    content: json.body,
    tags: json.tags,
  }
}

export const jsonToTurboPosts = (json: ITurboPostsApiPost): ITurboPost => {
  return {
    id: json.id,
    heading: json.title,
    content: json.body,
    tags: json.tags,
  }
}
