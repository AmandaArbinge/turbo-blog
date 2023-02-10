import { render, fireEvent, screen, getByText } from '@testing-library/react'
import { TurboPostsList } from './TurboPostsList'
import { Postdata } from './TurboPostsListData'

describe('TurboPostsList', () => {
  it('renders', () => {
    const { queryAllByText } = render(
      <TurboPostsList emptyMessage={'msg'} posts={Postdata} />,
    )
    expect(queryAllByText('test')).toHaveLength(1)
  })
})
