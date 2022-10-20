import { useState } from "react"

export const useUserList = () => {
  const [viewAllUsers, setViewAllUsers] = useState(false)

  const handleAllView = () => {
    viewAllUsers ? setViewAllUsers(false) : setViewAllUsers(true)
  }

  return {
    viewAllUsers,
    handleAllView
  }
}