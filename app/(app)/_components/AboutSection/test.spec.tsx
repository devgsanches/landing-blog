import { render, screen } from '@testing-library/react'

import { AboutSection } from '.'

describe('<AboutSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<AboutSection />)

    expect(screen.getByRole('heading', { name: /AboutSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})