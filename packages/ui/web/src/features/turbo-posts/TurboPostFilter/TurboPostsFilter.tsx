import React from 'react'
import { Chip, TextButton } from '../../../common'
import { IFilter } from '@turbo-blog/types'

export interface ITurboPostsFilterProps extends IFilter {
  filters: IFilter[]
  onToggle?: (IFilter: IFilter) => void
  onClear?: () => void
}

export const TurboPostsFilter: React.FC<ITurboPostsFilterProps> = ({
  filters,
  ...rest
}) => {
  let selected: boolean = false

  const onClear = () => {
    filters.map((filter: IFilter) => {
      filter.selected = false
      return filters
    })
  }

  const onToggle = (IFilter: IFilter) => {
    alert('onToggle!')
  }

  return (
    <>
      <div className={'flex space-x-4'}>
        {filters.map((filter, index) => {
          if (filter.selected) selected = true
          return (
            <Chip
              key={index}
              onClick={() => onToggle(filter)}
              title={filter.title}
              selected={filter.selected}
              disabled={filter.disabled}
            />
          )
        })}
      </div>
      <div className={'text-center'}>
        {selected ? (
          <TextButton onClick={onClear}>Clear all filters</TextButton>
        ) : null}
      </div>
    </>
  )
}
