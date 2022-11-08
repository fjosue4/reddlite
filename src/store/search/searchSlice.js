import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchSearchedData } from '../../api'
const initialState = {
  loading: false,
  data: [],
  trendingData: [],
  error: null
}

function shuffle (array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

export const getSearchedData = createAsyncThunk(
  'index/getSearchedData',
  async searchTerm => {
    const resByCommunites = await fetchSearchedData(`${searchTerm}&&type=sr`)
    const resByUser = await fetchSearchedData(`${searchTerm}&type=user`)

    return shuffle([
      ...resByCommunites.data.data.children,
      ...resByUser.data.data.children
    ]).slice(0, 26)
  }
)

export const getTrendingData = createAsyncThunk(
  'index/getTrendingData',
  async () => {
    const trending = await fetchSearchedData('q=trending')
    return trending.data.data.children.slice(0, 4).map(item => item.data)
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
    })
    builder.addCase(getSearchedData.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(getTrendingData.pending, state => {
      state.loading = true
    })
    builder.addCase(getTrendingData.fulfilled, (state, action) => {
      state.loading = false
      state.trendingData = action.payload
    })
    builder.addCase(getTrendingData.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default searchSlice.reducer
