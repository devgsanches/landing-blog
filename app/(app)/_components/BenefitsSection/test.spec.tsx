import { render, screen } from '@testing-library/react'

import { BenefitsSection } from '.'

describe('<BenefitsSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<BenefitsSection />)

    expect(screen.getByRole('heading', { name: /BenefitsSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})