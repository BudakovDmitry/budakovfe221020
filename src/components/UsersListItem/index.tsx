import { UserType } from 'src/types'
import './styles.css'

type UsersListItemProps = {
  openCard: () => void
  user: UserType
}

const UsersListItem = ({
  openCard = () => {},
  user = {} as UserType,
}: UsersListItemProps) => {
  const photoUser = require(`src/images/${user.photo}`)

  return (
    <div className="item-container">
      <div className="item-photo-container">
        <img className="item-photo" src={photoUser} alt="photo" />
      </div>
      <div className="item-user-name-container">
        <p className="item-user-name">{user.name}</p>
        <p className="item-user-nickname">{user.nickname}</p>
      </div>
      <button onClick={openCard} className="item-button-view">
        View
      </button>
    </div>
  )
}

export default UsersListItem
