import { ITurboPost } from '@turbo-blog/types'
import { useAppSelector, selectTurboPostsSelectedTags } from '@turbo-blog/store'
import { TurboPostList } from '@turbo-blog/web-ui'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Postdata } from '@turbo-blog/web-ui'

export interface FilteredListProps {
  posts: ITurboPost[]
}

export const TurboPostsFilteredList: React.FC<FilteredListProps> = ({
  posts,
}) => {
  const router = useRouter()
  const selectedTags = useAppSelector(selectTurboPostsSelectedTags)

  let filteredList: Array<ITurboPost> = []

  const filterList = () => {
    posts.map((post: ITurboPost, index: number) => {
      if (selectedTags.selectedTags.every((p) => post.tags.includes(p))) {
        filteredList.push(post)
      }
    })
    console.log(filteredList)
    return filteredList
  }

  return (
    <>
      {selectedTags.selectedTags.length < 0 ? (
        <TurboPostList
          posts={posts}
          emptyMessage={'No posts :/'}
          onClick={(post) => router.push(`${router.pathname}/${post.id}`)}
        />
      ) : (
        <TurboPostList
          posts={filterList()}
          emptyMessage={'No posts :/'}
          onClick={(post) => router.push(`${router.pathname}/${post.id}`)}
        />
      )}
    </>
  )
}
