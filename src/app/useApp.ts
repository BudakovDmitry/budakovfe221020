import { useState } from "react"
import { useSelector } from 'react-redux'
import { UserType } from "src/types"



export const useApp = () => {
  const [viewCard, setViewCard] = useState(false)
  const users = useSelector((state: any) => state.users)
  const [activeUser, setActiveUser] = useState(0)

  const openCard = (index: number) => {
    setActiveUser(index)
    setViewCard(true)
  }

  const closeCard = () => setViewCard(false)

  return {
    viewCard,
    openCard,
    closeCard,
    users,
    activeUser,
    setActiveUser
  }
}