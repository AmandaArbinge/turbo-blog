import React, { useEffect, useState } from 'react'
import { ITurboPost } from '@turbo-blog/types'
import { TurboPostsFilter } from '@turbo-blog/web-ui'
import { IFilter } from '@turbo-blog/types'
import { TurboPostList } from '@turbo-blog/web-ui'
import {
  useAppSelector,
  useAppDispatch,
  selectTurboPostsSelectedTags,
  turboPostsActions,
} from '@turbo-blog/store'
import { useRouter } from 'next/router'

export interface FilterableListProps {
  posts: ITurboPost[]
}

export const TurboPostsFilterableList: React.FC<FilterableListProps> = ({
  posts,
}) => {
  const [tags, setTags] = useState<string[]>([])
  const router = useRouter()
  const dispatch = useAppDispatch()
  const selectedTags = useAppSelector(selectTurboPostsSelectedTags)

  useEffect(() => {
    const tagsArr: string[] = []
    posts &&
      posts.forEach((post) =>
        post.tags.forEach((post) =>
          !tagsArr.includes(post) ? tagsArr.push(post) : null,
        ),
      )
    tagsArr.sort()
    setTags(tagsArr)
  }, [posts])

  const onToggle = (filter: IFilter) => {
    dispatch(turboPostsActions.toggleSelectedTag(filter.title))
  }

  const filterTags = tags.map((tag: string, index: number) => ({
    key: index,
    title: tag,
    selected: selectedTags.selectedTags.includes(tag),
  }))

  const onClear = () => {
    dispatch(turboPostsActions.clearSelectedTags())
  }

  let filteredList: Array<ITurboPost> = []

  const filterList = () => {
    posts &&
      posts.map((post: ITurboPost) => {
        if (selectedTags.selectedTags.every((p) => post.tags.includes(p))) {
          filteredList.push(post)
        }
      })
    return filteredList
  }

  return (
    <>
      <div className={'pb-8'}>
        <TurboPostsFilter
          onToggle={(filter) => {
            onToggle(filter)
          }}
          filters={filterTags}
          title={'tags'}
          onClear={() => onClear()}
        />
      </div>

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
