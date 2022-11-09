import React from 'react'
import { useSelector } from 'react-redux';
import { fetchPopularPosts } from '../../../store/post/popularPostsSlice';


const PopularFeed = () => {
    const popularPosts = useSelector(fetchPopularPosts);
    const {data, loading, error} = popularPosts;
  
    return (
    <div>PopularFeed</div>
  )
}

export default PopularFeed