const CloseIcon = require('src/images/close-icon.svg')
import FallbackMessage from 'src/components/FallbackMessage'
import { UserType } from 'src/types'
import './styles.css'

type UserCardProps = {
  closeCard: () => void
  user: UserType
}

const UserCard = ({
  closeCard = () => {},
  user = {} as UserType,
}: UserCardProps) => {
  const photoUser = require(`src/images/${user.photo}`)

  if (!user) return <FallbackMessage />

  return (
    <div className="user-card-container">
      <div className="user">
        <div className="user-photo-container">
          <img className="user-photo" src={photoUser} alt="photo" />
        </div>
        <p className="user-name">{user.name}</p>
        <p className="user-position">{user.position}</p>
      </div>
      <div className="user-info">
        <div className="user-info-container">
          <p className="user-info-title">Phone</p>
          <p>{user.phone}</p>
        </div>
        <div className="user-info-container">
          <p className="user-info-title">URL</p>
          <p>
            <a href="#">https://example.com</a>
          </p>
        </div>
        <div className="user-info-container">
          <p className="user-info-title">Email</p>
          <p>
            <a href="#">{user.email}</a>
          </p>
        </div>
      </div>
      <button className="user-card-button">Send message</button>
      <button onClick={closeCard} className="user-card-close-button">
        <img src={CloseIcon} alt="close" />
      </button>
    </div>
  )
}

export default UserCard
