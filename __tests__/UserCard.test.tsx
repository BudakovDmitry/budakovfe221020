import React from 'react'
import { render, screen } from '@testing-library/react'
import { UserType } from '../src/types'
import UserCard from '../src/components/UserCard'

describe('Test App component', () => {
  it('render App component', () => {
    const user = {} as UserType
    render(<UserCard closeCard={() => {}} user={user} />)
    screen.debug()
  })
})
