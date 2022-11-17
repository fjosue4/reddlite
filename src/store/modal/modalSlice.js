import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    showModal: true
  }
  
  const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state) => {
            state.showModal = false
    }}
})
  
  export default modalSlice.reducer
  export const changeModal = modalSlice.actions