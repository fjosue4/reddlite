import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import './SearchBar.css'

import { useSelector, useDispatch } from 'react-redux'
import { getSearchedData } from '../../store/search/searchSlice'

function SearchBar (props) {
  const [searchTerm, setSearchTerm] = useState('')

  const searchedContent = useSelector(state => state.search)
  const dispatch = useDispatch()

  const handleSearch = e => {
    dispatch(getSearchedData(searchTerm))
  }
  console.log(searchedContent)

  return (
    <div className='search-bar'>
      <Icon icon='ant-design:search-outlined' className='search-icon' />
      <input
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        type='search'
        placeholder='Search ReddLite'
        className='search-input'
      ></input>
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  )
}

export default SearchBar
