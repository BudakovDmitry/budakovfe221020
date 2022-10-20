import UsersListItem from 'src/components/UsersListItem'
import './styles.css'

const UsersList = () => {
  return (
    <div className="user-list-container">
      <UsersListItem />
      <UsersListItem />
      <UsersListItem />
      <button className="user-list-button-view">View all</button>
    </div>
  )
}

export default UsersList
