import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchUserData, fetchCommunityData } from '../../api/index'

const initialState = {
  showModal: false,
  info: {},
  data: [],
  loading: false,
  error: ''
}

// reducer that will fetch the info about the user name
export const getData = createAsyncThunk('modal/getData', async args => {
  const response =
    args.type === 'user'
      ? await fetchUserData(args.title)
      : await fetchCommunityData(args.title.split('/')[1])
  return response.data.data.children
})

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
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getData.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
    }
  }
})

export default modalSlice.reducer
export const changeModal = modalSlice.actions
