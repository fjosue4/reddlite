import React from 'react'
import { useSelector } from 'react-redux';
import { selectPopularPosts } from '../../../store/post/popularPostsSlice';
import DummyIcon from '../../../img/reddit-logo.svg';
import './PopularFeed.css';

const PopularFeed = () => {
    const popularPosts = useSelector(selectPopularPosts);
    const {data, loading, error} = popularPosts;
  
    /*
      convertToK is the function using
      to check if a number is ready
      for converting
      to K form 
      Example: 16000 --> 16k
      Example: 5400 --> 5.4k
    */
    function convertToK(number){
      if(number < 1000){
        return number
      }
      let newNumber = number/1000;
      newNumber = newNumber.toFixed(1);
      let result = newNumber.toString();
      result += 'k';
      return result;
    }

    /*
      Create img use for if the user icon does exist
      If yes pass it to the screen 
      If no passing a dummy one instead
    */
    function createImg(url) {
      if(url){
        return <img src={url.icon_url} alt="icon" className='postIcon'/>;
      }
      return <img src={DummyIcon} alt="icon" className='postIcon'/>
    }

    /*
      isNew checking existence of the post time
      If yes and it new pass it to the screen
      If no there're nothing happen
    */
    function isNew(post){
      if(post){
        // console.log(post.is_new);
        if(post.is_new){
          return <p>NEW!</p>
        }
      }
    }

    /*
      someUnwantedImg checking the existence of the thumbnail
      If yes and it new pass it to the screen
      If no there're nothing happen
    */
    function someUnwantedImg(img){
      if(img === "default" || img === "spoiler" 
      || img === "self" || img === "nsfw" || img === "image"){
        return false;
      }
      return true;
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
                <p>{convertToK(eachData.data.score)}</p>
              </div>
              <div className='postContent'>
                <div className="postHeader">
                  <div className='leftPostHeader'>
                    {createImg(eachData.data.all_awardings[0])}
                    <p>{`r/${eachData.data.subreddit}`}</p>
                    <p>{`r/${eachData.data.author_fullname}`}</p>
                    {isNew(eachData.data.all_awardings[0])}
                  </div>
                  <div className="rightPostHeader">
                    <button className="btn">Join</button>
                  </div>
                </div>
                <div className='postBody'>
                    <h2>{eachData.data.title}</h2>
                    {someUnwantedImg(eachData.data.thumbnail) && <img src={eachData.data.thumbnail} alt="thumbnail" />}
                    <div className='commentsBlock'>
                      {/* I don't know how to 
                      get the comment image so I'll leave it for ya */}
                      <p>Comments: {convertToK(eachData.data.num_comments)}</p>
                    </div>
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