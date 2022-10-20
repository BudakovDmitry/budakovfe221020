import { configureStore } from '@reduxjs/toolkit'
import usersReducer from 'src/redux/usersSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true,
})
