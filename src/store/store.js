import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './home/homeSlice'
import searchReducer from './search/searchSlice'
import communityReducer from './community/communitySlice'
import postReducer from './post/postSlice'

const store = configureStore({
  reducer: {
    home: homeReducer,
    search: searchReducer,
    community: communityReducer,
    post : postReducer,
  }
})

export default store
