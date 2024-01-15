import { configureStore } from '@reduxjs/toolkit'
import { RickAndMortyApi } from '../slices/RickAndMortyApi/RickAndMortyApi'
import FavouritesSliceReducer from '../slices/Favourites/FavouritesSlice'
import showModalSliceReducer from '../slices/ShowModal/ShowModalSlice'
import FilteredCharsSlice from '../slices/FilteredChars/FilteredCharsSlice'

export const store = configureStore({
  reducer: {
    [RickAndMortyApi.reducerPath]: RickAndMortyApi.reducer,
    Favourites: FavouritesSliceReducer,
    Modal: showModalSliceReducer,
    Filter: FilteredCharsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RickAndMortyApi.middleware),
})

//Exporting the type of the store.dispatch function
export type AppDispatch = typeof store.dispatch

//Object with states from the store; updates automatically if new reducers are added
export type RootState = ReturnType<typeof store.getState>
