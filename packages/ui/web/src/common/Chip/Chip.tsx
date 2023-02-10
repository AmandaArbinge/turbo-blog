import React from 'react'
import clsx from 'clsx'
import { IFilter } from '@turbo-blog/types'

export interface IChipProps extends IFilter {
  onClick?: () => void
}

export const Chip: React.FC<IChipProps> = ({
  disabled = false,
  selected = false,
  title = '',
  ...rest
}) => {
  const defaultClassName = clsx(
    'h-8 w-24',
    'border rounded-lg',
    'text-sm',
    'text-center',
    'outline-none ring-2 ring-primary-accent',
    'hover:bg-primary-accent/20',
  )

  const disabledClassName = clsx(
    'h-8 w-24',
    'outline-none ring-2 ring-primary-accent ',
    'border rounded-md',
    'shadow-sm',
    'text-sm',
    'text-center',
    'text-secondary-light',
  )

  const selectedClassName = clsx(
    'h-8 w-24',
    'bg-primary-accent',
    'border rounded-md',
    'shadow-sm',
    'text-sm',
    'text-center',
    'text-white',
  )

  //const clicked = () => !selected
  return (
    <button
      className={
        disabled
          ? disabledClassName
          : !selected
          ? defaultClassName
          : selectedClassName
      }
      disabled={disabled}
      {...rest}
    >
      {title}
    </button>
  )
}
