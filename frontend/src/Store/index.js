import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./modules/user/"

export const store = configureStore({
  reducer: {userSlice},
})