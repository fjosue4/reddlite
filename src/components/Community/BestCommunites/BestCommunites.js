import React from 'react'
import './BestCommunites.css'
import { Icon } from '@iconify/react'
import { useEffect } from 'react'
import { getSubbreditsList } from '../../../store/subreddits/subredditSlice'
import { changeModal, getData } from '../../../store/modal/modalSlice'
import { useSelector, useDispatch } from 'react-redux'


const filterTopFiveCommunites = (data) => {
  let topFive = []
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].data.community_icon)
        topFive.push(data[i])
      if (topFive.length >= 5) break;
    }

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

  // const openModal = community => {
  //   const args =
  //   community.kind === 't2'
  //       ? { type: 'user', title: community.display_name }
  //       : { type: 'community', title: community.display_name }
  
  //   dispatch(changeModal.updateInfo(community))
  //   dispatch(changeModal.toggleModal())
  //   dispatch(getData(args))
  // }
  

  const topFive = filterTopFiveCommunites(data)
  
  return (
    <div class="best-communities-container">
      <div class="best-communities-heading">Recommended communities</div>
      {topFive.map((community, index) => (<div class="best-community-wrapper">
        <div class="subreddit">
          <span class="index">{index+1}</span>
          <div class="best-community">
            <div class="eclipse"><img src={community.community_icon}/></div>
            <div class="thread">{community.display_name}</div>
          </div>
        </div>
        {/* <button class="btn" onClick={()=> openModal(community)}><Icon className='right-arrow' icon="ic:baseline-keyboard-arrow-right" /></button> */}
        <button class="btn"><Icon className='right-arrow' icon="ic:baseline-keyboard-arrow-right" /></button>
      </div>)
      )}
      <div class="button-wrapper">
        <button class="btn">All</button>
      </div>
    </div>
  )
}

export default BestCommunites
