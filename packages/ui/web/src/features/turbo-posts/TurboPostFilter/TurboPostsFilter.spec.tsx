import { render, fireEvent, screen, getByText } from '@testing-library/react'
import { TurboPostsFilter } from './TurboPostsFilter'
import { storyBook2Filter } from './TurboPostsFilterData'

describe('TurboPostsFilter', () => {
  it('renders', () => {
    render(<TurboPostsFilter title={'Filter'} filters={storyBook2Filter} />)
    expect(screen.getByText('FilterChip')).toBeInTheDocument()
  })
})
