import { useApp } from 'src/app/useApp'
import UserCard from 'src/components/UserCard'
import UsersList from 'src/components/UsersList'

import './styles.css'

const App = () => {
  const { viewCard, openCard, closeCard, users, activeUser } = useApp()

  return (
    <div className="app-container">
      {viewCard ? (
        <UserCard closeCard={closeCard} user={users[activeUser]} />
      ) : (
        <UsersList openCard={openCard} users={users} />
      )}
    </div>
  )
}

export default App
