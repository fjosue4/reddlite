import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    showModal: false
  }
  
  const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        hideModal: (state) => {
            state.showModal = false
        },
        showModal: (state) =>
         {
            state.showModal = true
        }
}
})
  
  export default modalSlice.reducer
  export const changeModal = modalSlice.actions