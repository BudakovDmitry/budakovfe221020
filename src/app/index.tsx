import { useApp } from 'src/app/useApp'
import UserCard from 'src/components/UserCard'
import UsersList from 'src/components/UsersList'
import { useSelector } from 'react-redux'

import './styles.css'

const App = () => {
  const { viewCard, openCard, closeCard } = useApp()
  const users = useSelector((state: any) => state.users)

  return (
    <div className="app-container">
      {viewCard ? (
        <UserCard closeCard={closeCard} user={users[1]} />
      ) : (
        <UsersList openCard={openCard} users={users} />
      )}
    </div>
  )
}

export default App
