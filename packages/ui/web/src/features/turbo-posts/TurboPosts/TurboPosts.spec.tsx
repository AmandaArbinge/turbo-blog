import { render, fireEvent, screen } from '@testing-library/react'
import { TurboPosts } from './TurboPosts'

describe('TurboPosts', () => {
  it('renders', () => {
    const { queryAllByText } = render(
      <TurboPosts heading={'heading'} content={'Test'} />,
    )
    expect(queryAllByText('Test')).toHaveLength(1)
  })
})
