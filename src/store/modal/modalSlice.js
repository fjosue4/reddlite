import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  showModal: false,
  info: {},
  data: {}
}

// reducer that will fetch the info about the user name

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: state => {
      state.showModal = !state.showModal
    },
    updateInfo: (state, action) => {
      state.info = action.payload
    }
  }
})

export default modalSlice.reducer
export const changeModal = modalSlice.actions
