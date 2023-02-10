import React from 'react'
import { ITurboPost } from '@turbo-blog/types'

export interface ITurboPostsListProps {
  posts: ITurboPost[]
  emptyMessage: string
  onClick?: (post: ITurboPost) => void
}

export const TurboPostsList: React.FC<ITurboPostsListProps> = ({
  posts,
  ...rest
}) => {
  const onClick = (post: ITurboPost) => {
    alert(post)
  }

  return (
    <>
      <div className={'text-center'}>
        {posts.length === 0 ? (
          <p>No posts available </p>
        ) : (
          <div>
            {posts.map((post: ITurboPost) => {
              return (
                <div key={post.id} onClick={() => onClick(post)}>
                  <li className={'flex space-x-4 ...'}>
                    {post.heading} <br></br>
                    {post.content} <br></br>
                    {post.tags}
                  </li>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
