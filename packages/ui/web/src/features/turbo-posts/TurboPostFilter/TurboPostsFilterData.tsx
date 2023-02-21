import React from 'react'
import { IFilter } from '@turbo-blog/types'

export const storyBook1Filter: IFilter[] = [
  { title: 'Filter Chip', selected: false, disabled: false },
  { title: 'Filter Chip', selected: false, disabled: false },
  { title: 'Filter Chip', selected: false, disabled: false },
  { title: 'Filter Chip', selected: false, disabled: false },
  { title: 'Filter Chip', selected: false, disabled: false },
  { title: 'Filter Chip', selected: false, disabled: true },
]

export const storyBook2Filter: IFilter[] = [
  { title: 'Filter Chip', selected: false, disabled: false },
  { title: 'Filter Chip', selected: true, disabled: false },
  { title: 'Filter Chip', selected: false, disabled: false },
  { title: 'Filter Chip', selected: true, disabled: false },
  { title: 'Filter Chip', selected: false, disabled: true },
  { title: 'Filter Chip', selected: false, disabled: false },
]
