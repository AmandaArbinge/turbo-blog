import { render, fireEvent, screen, getByText } from '@testing-library/react'
import { TurboPostList } from './TurboPostList'
import { Postdata } from './TurboPostListData'

describe('TurboPostsList', () => {
  it('renders', () => {
    render(<TurboPostList emptyMessage={'msg'} posts={Postdata} />)

    expect(
      screen.getByText('His mother had always taught him'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('He was an expert but not in a discipline'),
    ).toBeInTheDocument()
  })
})
