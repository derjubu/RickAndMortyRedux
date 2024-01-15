import { createSlice } from '@reduxjs/toolkit'

const initialState: boolean = false

export const FilteredCharsSlice = createSlice({
  name: 'filteredCharsSlice',
  initialState,
  reducers: {
    toggleFilter(state) {
      return !state
    },
  },
})

export const { toggleFilter } = FilteredCharsSlice.actions
export default FilteredCharsSlice.reducer
