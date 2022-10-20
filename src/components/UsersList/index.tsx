import UsersListItem from 'src/components/UsersListItem'
import './styles.css'

type UserListProps = {
  openCard: () => void
}

const UsersList = ({ openCard }: UserListProps) => {
  return (
    <div className="user-list-container">
      <UsersListItem openCard={openCard} />
      <UsersListItem openCard={openCard} />
      <UsersListItem openCard={openCard} />
      <button className="user-list-button-view">View all</button>
    </div>
  )
}

export default UsersList
