import { render, screen } from '@testing-library/react'
import { UserType } from 'src/types'
import UserListItem from 'src/components/UsersListItem'

describe('Test App component', () => {
  it('render App component', () => {
    const user = {} as UserType
    render(<UserListItem openCard={() => {}} user={user} />)
    screen.debug()
    expect(screen.getByText('View all')).toBeInTheDocument()
  })
})
