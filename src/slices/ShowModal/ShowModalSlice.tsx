import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  book: {
    title: '',
    image: '',
    id: 0,
  },
}

export const showModalSlice = createSlice({
  name: 'showModalSlice',
  initialState,
  reducers: {
    toggleModal(state, action) {
      if (state.value === true) {
        return (state = {
          value: false,
          book: action.payload.book,
        })
      }
      return (state = { value: true, book: action.payload.book })
    },
  },
})

export const { toggleModal } = showModalSlice.actions
export default showModalSlice.reducer
