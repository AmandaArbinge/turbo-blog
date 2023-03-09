import { render, fireEvent, screen } from '@testing-library/react'
import { TurboPost } from './TurboPost'

describe('TurboPosts', () => {
  it('renders', () => {
    const { queryAllByText } = render(
      <TurboPost id={1} heading={'heading'} content={'Test'} />,
    )
    expect(queryAllByText('Test')).toHaveLength(1)
  })
})
