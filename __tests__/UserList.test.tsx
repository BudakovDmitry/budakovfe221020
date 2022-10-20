import React from 'react'
import { render, screen } from '@testing-library/react'
import { UserType } from '../src/types'
import UserList from '../src/components/UsersList'

describe('Test App component', () => {
  it('render App component', () => {
    const users = [] as UserType[]
    render(<UserList openCard={() => {}} users={users} />)
    screen.debug()
    expect(screen.getByText('View all')).toBeInTheDocument()
  })
})
