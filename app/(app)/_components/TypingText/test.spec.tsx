import { render, screen } from '@testing-library/react'

import { TypingText } from '.'

describe('<TypingText />', () => {
  it('should render the heading', () => {
    const { container } = render(<TypingText />)

    expect(screen.getByRole('heading', { name: /TypingText/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})