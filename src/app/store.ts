import { configureStore } from '@reduxjs/toolkit'
import { BooksApi } from '../slices/BooksApi/BooksApi'
import BookmarksSliceReducer from '../slices/Bookmarks/BookmarksSlice'
import showModalSliceReducer from '../slices/ShowModal/ShowModalSlice'

export const store = configureStore({
  reducer: {
    [BooksApi.reducerPath]: BooksApi.reducer,
    Bookmarks: BookmarksSliceReducer,
    Modal: showModalSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BooksApi.middleware),
})

//Exporting the type of the store.dispatch function
export type AppDispatch = typeof store.dispatch

//Object with states from the store; updates automatically if new reducers are added
export type RootState = ReturnType<typeof store.getState>
