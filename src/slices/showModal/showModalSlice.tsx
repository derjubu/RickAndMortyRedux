import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: false, character: { name: '', image: '', id: 0 } }

export const showModalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    toggleModal(state, action) {
      return (state = action.payload)
    },
  },
})

export const { toggleModal } = showModalSlice.actions
export default showModalSlice.reducer
