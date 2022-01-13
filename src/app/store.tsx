import { configureStore } from '@reduxjs/toolkit'
import bookmarkreducer from '../slices/Bookmarks/BookmarksSlice'
import { RickAndMortyApiSlice } from '../slices/RickAndMortyApi/RickAndMortyApiSlice'

export const store = configureStore({
  reducer: {
    [RickAndMortyApiSlice.reducerPath]: RickAndMortyApiSlice.reducer,
    bookmarks: bookmarkreducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(RickAndMortyApiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
