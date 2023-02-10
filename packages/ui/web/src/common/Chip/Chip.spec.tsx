import { render, fireEvent, screen } from '@testing-library/react'
import { Chip } from '.'

describe('Chip', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Chip title={'Test'} />)
    expect(queryAllByText('Test')).toHaveLength(1)
  })
  it('clicks', () => {
    const handleClick = jest.fn()
    render(<Chip title={'click me'} onClick={handleClick} />)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  it('disabled button can´t be clicked', () => {
    const handleClick = jest.fn()
    render(<Chip title={'click me'} disabled onClick={handleClick} />)
    expect(screen.getByText(/click me/i)).toBeDisabled()
  })
})
