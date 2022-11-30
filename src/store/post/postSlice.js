import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPostData } from '../../api'
const initialState = {
  loading: false,
  data: [],
  error: null,
}

const getPostData = createAsyncThunk('post/getPostData', async (url) => {
  const res = await fetchPostData(url)
  return res.data[1].data.children
})

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPostData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.success = true
    })
    builder.addCase(getPostData.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export default postSlice.reducer
export { getPostData }
