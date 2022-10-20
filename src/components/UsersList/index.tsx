import { UserType } from 'src/types'
import UsersListItem from 'src/components/UsersListItem'
import './styles.css'
import { useUserList } from 'src/components/UsersList/useUserList'
import FallbackMessage from 'src/components/FallbackMessage'

type UserListProps = {
  openCard: (index: number) => void
  users: UserType[]
}

const UsersList = ({ openCard = () => {}, users = [] }: UserListProps) => {
  const { viewAllUsers, handleAllView } = useUserList()

  if (!users) return <FallbackMessage />

  return (
    <div className="user-list-container">
      {(viewAllUsers ? users : users.slice(0, 3)).map((user, index) => (
        <UsersListItem
          key={index}
          openCard={() => openCard(index)}
          user={user}
        />
      ))}
      <button className="user-list-button-view" onClick={handleAllView}>
        {viewAllUsers ? 'Hide' : 'View all'}
      </button>
    </div>
  )
}

export default UsersList
