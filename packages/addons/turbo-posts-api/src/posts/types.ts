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
