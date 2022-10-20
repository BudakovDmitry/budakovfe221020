import './styles.css'
const Image = require('src/images/1.jpg')

type UsersListItemProps = {
  openCard: () => void
}

const UsersListItem = ({ openCard }: UsersListItemProps) => {
  return (
    <div className="item-container">
      <div className="item-photo-container">
        <img className="item-photo" src={Image} alt="photo" />
      </div>
      <div className="item-user-name-container">
        <p className="item-user-name">Leonard Carser</p>
        <p className="item-user-nickname">@leonardcarser</p>
      </div>
      <button onClick={openCard} className="item-button-view">
        View
      </button>
    </div>
  )
}

export default UsersListItem
