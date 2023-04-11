export interface ITurboPostsApiPostsResult {
  posts: Array<ITurboPostsApiPost>
  total: number
  skip: number
  limit: number
}

export interface ITurboPostsApiPost {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}
export interface AddTurboPostRequestData {
  heading: string
  content: string
  tags?: string[]
}

export interface ITurboPostsApiCreatePost {
  title: string
  body: string
  userId: number
  tags?: string[]
}

export interface ITurboPostsApiCreatePostResult {
  id: number
  title: string
  body: string
  userId: number
  tags?: string[]
}
