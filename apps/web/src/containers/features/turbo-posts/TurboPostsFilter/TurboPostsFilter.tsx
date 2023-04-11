import React, { useEffect, useState } from 'react'
import { ITurboPost } from '@turbo-blog/types'
import { TurboPostsFilter as TurboPostsFilterUI } from '@turbo-blog/web-ui'
import { IFilter } from '@turbo-blog/types'
import {
  useAppSelector,
  useAppDispatch,
  selectTurboPostsSelectedTags,
  turboPostsActions,
} from '@turbo-blog/store'

export interface FilterProps {
  posts: ITurboPost[]
}

export const TurboPostsFilter: React.FC<FilterProps> = ({ posts }) => {
  const [tags, setTags] = useState<string[]>([])
  const dispatch = useAppDispatch()
  const selectedTags = useAppSelector(selectTurboPostsSelectedTags)

  useEffect(() => {
    const tagsArr: string[] = []
    posts &&
      posts.forEach(
        (post) =>
          post &&
          post.tags &&
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

  return (
    <>
      <div className={'pb-8'}>
        <TurboPostsFilterUI
          onToggle={(filter) => {
            onToggle(filter)
          }}
          filters={filterTags}
          title={'tags'}
          onClear={() => onClear()}
        />
      </div>
    </>
  )
}
