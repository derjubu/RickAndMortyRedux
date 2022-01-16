import { configureStore } from '@reduxjs/toolkit'
import favouritesreducer from '../slices/favourites/favouritesSlice'
import charactermodalreducer from '../slices/showModal/showModalSlice'
import { rickAndMortyApi } from '../slices/rickAndMortyApi/rickAndMortyApi'

export const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    favouriteCharacters: favouritesreducer,
    characterModal: charactermodalreducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
