import { createSlice } from '@reduxjs/toolkit'

const initialState: number[] = []

export const bookMarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    toggle(state = initialState, action) {
      if (state.includes(action.payload)) {
        return (state = state.filter((number) => number !== action.payload))
      }
      return (state = [...state, action.payload])
    },
  },
})

export const { toggle } = bookMarksSlice.actions
export default bookMarksSlice.reducer
