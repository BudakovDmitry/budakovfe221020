import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../src/app'

describe('Test App component', () => {
  it('render App component', () => {
    render(<App />)
    screen.debug()
    expect(screen.getByText('View all')).toBeInTheDocument()
  })
})
