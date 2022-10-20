import { useState } from "react"

export const useApp = () => {
  const [viewCard, setViewCard] = useState(false)

  const openCard = () => setViewCard(true)

  const closeCard = () => setViewCard(false)

  return {
    viewCard,
    openCard,
    closeCard
  }
}