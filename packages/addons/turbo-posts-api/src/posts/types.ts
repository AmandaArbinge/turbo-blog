export interface ITurboPostApiResult {
  posts: Array<ITurboPostApiPosts>
  total: number
  skip: number
  limit: number
}

export interface ITurboPostApiPosts {
  id: number
  title: string
  body: string
  tags?: string[]
}
