import {
  render,
  screen,
} from '@testing-library/react'
import { TurboPostsFilter } from './TurboPostsFilter'
import { storyBook2Filter, storyBook1Filter } from './TurboPostsFilterData'

describe('TurboPostsFilter', () => {
  it('renders', () => {
    const { queryAllByText } = render(
      <TurboPostsFilter title={'Filter'} filters={storyBook1Filter} />,
    )
    expect(queryAllByText('Filter Chip')).toHaveLength(6)
  })

  it('disabled button cant be clicked', () => {
    render(<TurboPostsFilter title={'Filter'} filters={storyBook2Filter} />)
    expect(screen.getByText('Test 5')).toBeDisabled()
  })
})
