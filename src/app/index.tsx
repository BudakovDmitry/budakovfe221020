import { useApp } from 'src/app/useApp'
import UserCard from 'src/components/UserCard'
import UsersList from 'src/components/UsersList'

import './styles.css'

const App = () => {
  const { viewCard, openCard, closeCard } = useApp()

  return (
    <div className="app-container">
      {viewCard ? (
        <UserCard closeCard={closeCard} />
      ) : (
        <UsersList openCard={openCard} />
      )}
    </div>
  )
}

export default App
