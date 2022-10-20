const Image = require('src/images/1.jpg')
const CloseIcon = require('src/images/close-icon.svg')
import './styles.css'

type UserCardProps = {
  closeCard: () => void
}

const UserCard = ({ closeCard }: UserCardProps) => {
  return (
    <div className="user-card-container">
      <div className="user">
        <div className="user-photo-container">
          <img className="user-photo" src={Image} alt="photo" />
        </div>
        <p className="user-name">Leonard Carser</p>
        <p className="user-position">Front end</p>
      </div>
      <div className="user-info">
        <div className="user-info-container">
          <p className="user-info-title">Phone</p>
          <p>+ 38095 116 97 07</p>
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
            <a href="#">budakov.it@gmail.com</a>
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
