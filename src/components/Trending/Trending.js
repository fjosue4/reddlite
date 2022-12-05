import React from 'react'
import './Trending.css'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTrendingData } from '../../store/search/searchSlice'
import { getComments, postSliceActions } from '../../store/post/postSlice';

function Trending () {
  // To dispatch the action
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingData())
  }, [])
  const { trendingData } = useSelector(state => state.search)

  function openPostModal(post) {
    console.log(post)
    dispatch(postSliceActions.updatePost(post))
    dispatch(getComments(post.permalink))
    dispatch(postSliceActions.toggleModal())

  }

  
  let fallbackImage =
    'https://a.thumbs.redditmedia.com/Qr4cH1NmdrdxTac8wT3MbN-cNBU7uJear0HT6UeWwP8.jpg'

  const isValidUrl = urlString => {
    var urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // validate fragment locator
    return !!urlPattern.test(urlString)
  }


  // accessing data which is need to be in trending tile
  // 1. name
  // 2. subreddit_name_prefixed
  // 3. thumnail
  // 4. title
  // 5. icon_img ( use fallback as like as searched result)
  // 6. thumbnail_height ( which is not important )
  // 7. thumnail_weight ( which is not important )

  // first four to be using in the trending card
  // also some times trending data does not have any thumnail property, may be it's
  // get set from server
  // use this image as fallback background image https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/Russia-navy-February-2022-AFP.jpg?itok=G2L5JfWe
  // image quality are not best , then just fix on size and set the property to cover

  // rn, for title just use title and index as used in line 73

  // for icon  data.icon_img , use fall

  return (
    <div className='trending-section'>
      <h2>Trending</h2>
      <div className='trendings'>
        {trendingData?.map((data, index) => (
          <div
            className='trending'
            style={
              isValidUrl(data.thumbnail)
                ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.84),rgba(0, 0, 0, 0.84)) , url(${data.thumbnail})` }
                : { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.84),rgba(0, 0, 0, 0.84)) , url(${fallbackImage})`  }
            }
            onClick={() => openPostModal(data)}
          >
            <p>{data.title}</p>
            <div className='trend'>
              <img className='postIcon'
              src={data.all_awardings[0].icon_url} />
              <a href=''>
                <span>{data.subreddit_name_prefixed}</span>
              </a>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Trending
