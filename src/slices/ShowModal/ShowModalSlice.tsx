import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
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
      if (state.visible === true) {
        return (state = {
          visible: false,
          character: action.payload.character,
        })
      }
      return (state = { visible: true, character: action.payload.character })
    },
  },
})

export const { toggleModal } = showModalSlice.actions
export default showModalSlice.reducer
