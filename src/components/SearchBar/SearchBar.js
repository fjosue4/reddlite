import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import SearchedResult from '../SearchedResult/SearchedResult';
import './SearchBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchedData } from '../../store/search/searchSlice';

function SearchBar (props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  const showSearchResults = () => {
    setInputFocus(true);
  };

  const hideSearchResults = () => {
    searchTerm.length === 0 ? setInputFocus(false) : setInputFocus(true);
  };

  useEffect(() => {
    hideSearchResults()
  }, [searchTerm]);

  const searchedContent = useSelector(state => state.search)
  const dispatch = useDispatch()

  const handleChange = e => {
    setSearchTerm(e.target.value)
    dispatch(getSearchedData(`q=${searchTerm}`))
  }
  console.log(searchedContent)

  return (
    <div>
    <div className='search-bar'>
      <Icon icon='ant-design:search-outlined' className='search-icon' />
      <input
        onChange={handleChange}
        onClick={showSearchResults}
        value={searchTerm}
        type='search'
        placeholder='Search ReddLite'
        className='search-input'
      ></input>
      {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      {inputFocus === true ? <SearchedResult /> : null}
    </div>
  )
}

export default SearchBar
