/**
 * Combined handlers for all mocked APIs.
 * Add handlers for more mocked APIs below
 */

import { exampleApiMockHandlers } from '@turbo-blog/example-api-mocks'
import { turboPostsApiMockHandlers } from '@turbo-blog/turbo-posts-api-mocks'

// Here you can turn on or off mocking on a per API level
const MOCK_EXAMPLE_API = 1
const MOCK_TURBO_POSTS_API = 1

export const handlers = [
  ...((MOCK_EXAMPLE_API ? exampleApiMockHandlers : []) && MOCK_TURBO_POSTS_API
    ? turboPostsApiMockHandlers
    : []),
]
