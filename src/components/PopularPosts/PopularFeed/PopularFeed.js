import React from 'react'
import { useSelector } from 'react-redux';
import { selectPopularPosts } from '../../../store/post/popularPostsSlice';
import DummyIcon from '../../../img/reddit-logo.svg';

const PopularFeed = () => {
    const popularPosts = useSelector(selectPopularPosts);
    const {data, loading, error} = popularPosts;
  
    function convertToK(){
      
    }

    function createImg(url) {
      if(url){
        return <img src={url.icon_url} alt="icon" className='postIcon'/>;
      }
      return <img src={DummyIcon} alt="icon" className='postIcon'/>
    }
    if(data){
      // console.log(loading)
      // console.log(data);
      return (
      <div className='popularFeed'>
        {data.map(eachData => {
          // console.log(eachData);
          // console.log(eachData.data.all_awardings[0].icon_url)
          return(
            <div className='Feed'>
              <div className='voteSection'>

              </div>
              <div className='postContent'>
                <div className="postHeader">
                  {createImg(eachData.data.all_awardings[0])}
                  <p>{`r/${eachData.data.subreddit}`}</p>
                  <p>{`r/${eachData.data.author_fullname}`}</p>
                </div>
                <div className='postBody'>

                </div>
              </div>
            </div>
          )
          })}
      </div>
      )
    }
}

export default PopularFeed