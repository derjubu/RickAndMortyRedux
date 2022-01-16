import { createSlice } from '@reduxjs/toolkit'

const initialState: number[] = []

export const favouritesSlice = createSlice({
  name: 'favoriteCharacters',
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

export const { toggleFavourite } = favouritesSlice.actions
export default favouritesSlice.reducer
