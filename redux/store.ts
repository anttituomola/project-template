import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "redux/todoSlice"
import thunkMiddleware from "redux-thunk"

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
  middleware: [thunkMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
