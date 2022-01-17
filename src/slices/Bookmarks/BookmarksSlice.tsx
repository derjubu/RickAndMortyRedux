import { createSlice } from '@reduxjs/toolkit'

const initialState: number[] = []

export const BookmarkSlice = createSlice({
  name: 'bookmarksSlice',
  initialState,
  reducers: {
    toggleBookmark(state, action) {
      if (state.includes(action.payload)) {
        return (state = state.filter((id) => id !== action.payload))
      }
      return (state = [...state, action.payload])
    },
  },
})

export const { toggleBookmark } = BookmarkSlice.actions
export default BookmarkSlice.reducer
