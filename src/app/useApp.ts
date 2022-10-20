import { useState } from "react"
import { useSelector } from 'react-redux'
import { UserType } from "src/types"

type RootState = {
  users: UserType[]
}

export const useApp = () => {
  const [viewCard, setViewCard] = useState<boolean>(false)
  const users = useSelector((state: RootState) => state.users)
  const [activeUser, setActiveUser] = useState<number>(0)

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