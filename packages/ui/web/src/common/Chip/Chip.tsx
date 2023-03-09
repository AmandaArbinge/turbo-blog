import { useState } from 'react'
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
    selected ? 'text-white bg-primary-accent' : 'bg-inherit text-black',
    'hover:bg-primary-accent/20',
    'h-8 w-24',
    'border rounded-lg',
    'text-sm',
    'text-center',
    'outline-none ring-2 ring-primary-accent',
  )

  const disabledClassName = clsx(
    'h-8 w-24',
    'outline-none ring-2 ring-primary-accent ',
    'border rounded-md',
    'shadow-sm',
    'text-sm',
    'text-center',
  )

  return (
    <button
      onClick={() => onclick && onclick}
      className={disabled ? disabledClassName : defaultClassName}
      disabled={disabled}
      {...rest}
    >
      {title}
    </button>
  )
}
