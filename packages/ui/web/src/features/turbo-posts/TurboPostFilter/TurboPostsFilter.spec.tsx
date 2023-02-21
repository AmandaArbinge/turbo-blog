import { render, fireEvent, screen, getByText } from '@testing-library/react'
import { TurboPostsFilter } from './TurboPostsFilter'
import { storyBook2Filter } from './TurboPostsFilterData'

describe('TurboPostsFilter', () => {
  it('renders', () => {
    const { queryAllByText } = render(
      <TurboPostsFilter title={'test'} filters={storyBook2Filter} />,
    )
    expect(queryAllByText('Filter Chip')).toBeTruthy()
  })
})
