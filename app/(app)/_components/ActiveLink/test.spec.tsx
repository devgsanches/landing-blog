import { render, screen } from '@testing-library/react'

import { ActiveLink } from '.'

describe('<ActiveLink />', () => {
  it('should render the heading', () => {
    const { container } = render(<ActiveLink />)

    expect(screen.getByRole('heading', { name: /ActiveLink/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})