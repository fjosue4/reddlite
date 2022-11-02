import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchSearchedData } from '../../api'
const initialState = {
  loading: false,
  data: [],
  error: null
}

const getSearchedData = createAsyncThunk(
  'index/getSearchedData',
  async searchTerm => {
    const res = await fetchSearchedData(searchTerm)
    return res.data
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSearchedData.pending, state => {
      state.loading = true
    })
    builder.addCase(getSearchedData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.success = true
    })
    builder.addCase(getSearchedData.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default searchSlice.reducer
export { getSearchedData }
