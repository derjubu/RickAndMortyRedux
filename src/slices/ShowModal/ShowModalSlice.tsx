import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  character: {
    id: 0,
    name: '',
    image: '',
    species: '',
    status: false,
  },
}

export const showModalSlice = createSlice({
  name: 'showModalSlice',
  initialState,
  reducers: {
    toggleModal(state, action) {
      return (state = {
        character: action.payload.character,
      })
    },
  },
})

export const { toggleModal } = showModalSlice.actions
export default showModalSlice.reducer
