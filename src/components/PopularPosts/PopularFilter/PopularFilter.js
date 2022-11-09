import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularPosts, filterDescendingMod } from '../../../store/post/popularPostsSlice'

// The selecting most voted ascending is not comleted


const PopularFilter = () => {
    const dispatch = useDispatch();

    function getNewestPopularPosts(country){
        if(country){
            dispatch(fetchPopularPosts(`g=${country}`));
            return
        }
        dispatch(fetchPopularPosts());
    }
  
    function getMostVotedPopularPosts(){
        // This function isn't finished yet
        dispatch(filterDescendingMod());
    }

    return (
    <div className='popularFilter'>
        <select name="placeOption">
            <option value="GLOBAL">Global</option>
            <option value="US">USA</option>
            <option value="JP">Japan</option>
        </select>
        <div className='newest'>
            <h4 onClick={getNewestPopularPosts}>Newest</h4>
        </div>
        <div className='popular'> 
            <h4>Most voted</h4>
        </div>
    </div>
  )
}

export default PopularFilter