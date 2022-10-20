import { UserType } from 'src/types'
import UsersListItem from 'src/components/UsersListItem'
import './styles.css'

type UserListProps = {
  openCard: () => void
  users: UserType[]
}

const UsersList = ({ openCard, users }: UserListProps) => {
  return (
    <div className="user-list-container">
      {users.map((user, index) => (
        <UsersListItem key={index} openCard={openCard} user={user} />
      ))}
      <button className="user-list-button-view">View all</button>
    </div>
  )
}

export default UsersList
