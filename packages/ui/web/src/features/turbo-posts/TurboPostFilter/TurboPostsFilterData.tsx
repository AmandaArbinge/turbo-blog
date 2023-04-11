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
  { title: 'Test 1', selected: false, disabled: false },
  { title: 'Test 2', selected: true, disabled: false },
  { title: 'Test 3', selected: false, disabled: false },
  { title: 'Test 4', selected: true, disabled: false },
  { title: 'Test 5', selected: false, disabled: true },
  { title: 'Test 6', selected: false, disabled: false },
]
