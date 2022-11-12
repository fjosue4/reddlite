import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularPosts, filterDescendingMod } from '../../../store/post/popularPostsSlice'

// The selecting most voted ascending is not comleted


const PopularFilter = () => {
    const dispatch = useDispatch();

    const [country, setCountry] = useState('GLOBAL');

    useEffect(() => {
        getNewestPopularPosts(country);
        console.log(country);
    }, [country])

    function getNewestPopularPosts(nation){
        //target.value represent country
        dispatch(fetchPopularPosts(`g=${nation}`));
    }
  
    function getMostVotedPopularPosts(){
        // This function isn't finished yet
        // dispatch(filterDescendingMod());
    }

    return (
    <div className='popularFilter'>
        <select name="placeOption"
        onChange={({target}) => {setCountry(target.value)}}>
            <option value="GLOBAL">Global</option>
            <option value="US">USA</option>
            <option value="JP">Japan</option>
        </select>
        <div className='newest'>
            <h4 
            onClick={() => {getNewestPopularPosts(country)}}
            >Newest</h4>
        </div>
        <div className='popular'> 
            <h4 onClick={getMostVotedPopularPosts}>Most voted</h4>
        </div>
    </div>
  )
}

export default PopularFilter