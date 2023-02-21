import { render, fireEvent, screen, getByText } from '@testing-library/react'
import { TurboPostList } from './TurboPostList'
import { Postdata } from './TurboPostListData'

describe('TurboPostsList', () => {
  it('renders', () => {
    const { queryAllByText } = render(
      <TurboPostList emptyMessage={'msg'} posts={Postdata} />,
    )
    expect(queryAllByText('test')).toHaveLength(1)
  })
})
