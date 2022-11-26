import React from 'react'
import './BestCommunites.css'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getSubbreditsList } from '../../../store/subreddits/subredditSlice'


const filterTopFiveCommunites = (data) => {
    let topFive = []
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].data.community_icon)
        topFive.push(data[i])
      if (topFive.length >= 5) break;
    }

    console.log("top five", topFive)

    return topFive.map(item => {
      return {
        community_icon : item.data?.community_icon?.replace("&amp;","&"),
        display_name : item.data?.display_name_prefixed
      }
    })
}


const BestCommunites = () => {
  const dispatch = useDispatch()

  const { data, error, loading } = useSelector((state) => state.subreddits)

  useEffect(() => {
    dispatch(getSubbreditsList())
  }, []);


  

  console.log('subreddits', filterTopFiveCommunites(data))
  const topFive = filterTopFiveCommunites(data)

  return (
    <div class="best-communities-container">
      <div class="best-communities-heading">Best Communities: News</div>
      


      <div class="best-community-wrapper">
        <div class="subreddit">
          <span class="index">1</span>
          <div class="best-community">
            <div class="eclipse"></div>
            <div class="thread">r/thread</div>
          </div>
        </div>
        <button class="btn">Join</button>
      </div>
      <div class="best-community-wrapper">
        <div class="subreddit">
          <span class="index">2</span>
          <div class="best-community">
            <div class="eclipse"></div>
            <div class="thread">r/thread</div>
          </div>
        </div>
        <button class="btn">Join</button>
      </div>
      <div class="best-community-wrapper">
        <div class="subreddit">
          <span class="index">3</span>
          <div class="best-community">
            <div class="eclipse"></div>
            <div class="thread">r/thread</div>
          </div>
        </div>
        <button class="btn">Join</button>
      </div>
      <div class="best-community-wrapper">
        <div class="subreddit">
          <span class="index">4</span>
          <div class="best-community">
            <div class="eclipse"></div>
            <div class="thread">r/thread</div>
          </div>
        </div>
        <button class="btn">Join</button>
      </div>
      <div class="best-community-wrapper">
        <div class="subreddit">
          <span class="index">5</span>
          <div class="best-community">
            <div class="eclipse"></div>
            <div class="thread">r/thread</div>
          </div>
        </div>
        <button class="btn">Join</button>
      </div>

      <div class="button-wrapper">
        <button class="btn">All</button>
      </div>
    </div>
  )
}

export default BestCommunites
