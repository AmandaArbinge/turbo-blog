import React from 'react'
import { Chip, TextButton } from '../../../common'
import { IFilter } from '@turbo-blog/types'
import clsx from 'clsx'

export interface ITurboPostsFilterProps extends IFilter {
  filters: IFilter[]
  onToggle?: (IFilter: IFilter) => void
  onClear?: () => void
}

export const TurboPostsFilter: React.FC<ITurboPostsFilterProps> = ({
  filters,
  onToggle,
  onClear,
  ...rest
}) => {
  let selected = false

  const checkIfTrue = () => {
    filters.forEach((filter) =>
      filter.selected === true ? (selected = true) : null,
    )
    return selected
  }

  const filterClassName = clsx(
    'align-items: center',
    'flex space-x-4',
    'text-center',
  )

  return (
    <>
      <div className={filterClassName}>
        {filters.map((filter, index) => {
          return (
            <Chip
              key={index}
              onClick={() => onToggle && onToggle(filter)}
              title={filter.title}
              selected={filter.selected}
              disabled={filter.disabled}
            />
          )
        })}
      </div>
      <div>
        {checkIfTrue() ? (
          <TextButton onClick={() => onClear && onClear()}>
            Clear all filters{' '}
          </TextButton>
        ) : null}
      </div>
    </>
  )
}
