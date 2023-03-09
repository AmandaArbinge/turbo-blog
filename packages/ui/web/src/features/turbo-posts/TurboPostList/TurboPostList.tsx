import React from 'react'
import { ITurboPost } from '@turbo-blog/types'
import { TurboPost } from '../TurboPosts'
import clsx from 'clsx'

export interface ITurboPostListProps {
  posts: ITurboPost[]
  emptyMessage: string
  onClick?: (post: ITurboPost) => void
}

const listClassName = clsx(
  'w-full',
  'grid gap-4 grid-cols-3',
  'align-items: start',
)

export const TurboPostList: React.FC<ITurboPostListProps> = ({
  posts,
  onClick,
  ...rest
}) => {
  return (
    <>
      <div className={listClassName}>
        {posts && posts.length === 0 ? (
          <React.Fragment>
            <p>No posts available </p>
          </React.Fragment>
        ) : (
          <>
            {posts &&
              posts.map((post: ITurboPost) => {
                return (
                  <div key={post.id} onClick={() => onClick?.(post)}>
                    <TurboPost
                      key={post.id}
                      heading={post.heading}
                      content={post.content}
                      tags={post.tags}
                    />
                  </div>
                )
              })}
          </>
        )}
      </div>
    </>
  )
}
