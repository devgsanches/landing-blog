import { render, screen } from '@testing-library/react'

import { HeroSection } from '.'

describe('<HeroSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeroSection />)

    expect(screen.getByRole('heading', { name: /HeroSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})