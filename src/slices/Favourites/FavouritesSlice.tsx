import { createSlice } from '@reduxjs/toolkit'

const initialState: number[] = []

export const FavouritesSlice = createSlice({
  name: 'favouritesSlice',
  initialState,
  reducers: {
    toggleFavourite(state, action) {
      if (state.includes(action.payload)) {
        return (state = state.filter((id) => id !== action.payload))
      }
      return (state = [...state, action.payload])
    },
  },
})

export const { toggleFavourite } = FavouritesSlice.actions
export default FavouritesSlice.reducer
