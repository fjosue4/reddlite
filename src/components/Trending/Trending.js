import React from 'react'
import './Trending.css'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTrendingData } from '../../store/search/searchSlice'

function Trending () {
  // To dispatch the action
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingData())
  }, [])
  const { trendingData } = useSelector(state => state.search)

  // getting trending 4 data
  console.log('trendingData', trendingData)

  // mapping through them
  trendingData?.map((data, index) => {
    return console.log(
      index,
      'name',
      data.name,
      'subreddit_name',
      data.subreddit_name_prefixed,
      'title',
      data.title,
      'thumnail',
      data.thumbnail,
      'thumbnail_height',
      data.thumbnail_height,
      'thumbnail_widht',
      data.thumbnail_width
    )
  })

  let backgroundImage1 = 'https://i.stack.imgur.com/sXK51.png'
  let backgroundImage2 = 'https://i.stack.imgur.com/sXK51.png'
  let backgroundImage3 = 'https://i.stack.imgur.com/sXK51.png'
  let backgroundImage4 = 'https://i.stack.imgur.com/sXK51.png'

  let trend1
  let trend2
  let trend3
  let trend4
  // accessing data which is need to be in trending tile
  // 1. name
  // 2. subreddit_name_prefixed
  // 3. thumnail
  // 4. title
  // 5. thumbnail_height ( which is not important )
  // 6. thumnail_weight ( which is not important )

  // first four to be using in the trending card
  // also some times trending data does not have any thumnail property, may be it's
  // get set from server
  // use this image as fallback background image https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/Russia-navy-February-2022-AFP.jpg?itok=G2L5JfWe
  // image quality are not best , then just fix on size and set the property to cover

  // rn, for title just use title and index as used in line 73
  return (
    <div className='trending-section'>
      <h4>Trending</h4>
      <div className='trendings'>
        {trendingData?.map((data, index) => (
          <div
            key={index}
            className='trending'
            style={{ backgroundImage: `url(${data.thumbnail})` }}
          >
            <h3>Title {index}</h3>
            <p>{data.title}</p>
            <div className='trend'>
              <img src={trend1} />
              <a href=''>
                <span>{data.subreddit_name_prefixed}</span>
              </a>
            </div>
          </div>
        ))}

        {/* <div
          className='trending'
          style={{ backgroundImage: `url(${backgroundImage1})` }}
        >
          <h3>Title 1</h3>
          <p>Small description of trending</p>
          <div className='trend'>
            <img src={trend1} />
            <a href=''>
              <span>r/trend</span>
            </a>
          </div>
        </div>

        <div
          className='trending'
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        >
          <h3>Title 2</h3>
          <p>Small description of trending</p>
          <div className='trend'>
            <img src={trend2} />
            <a href=''>
              <span>r/trend</span>
            </a>
          </div>
        </div>

        <div
          className='trending'
          style={{ backgroundImage: `url(${backgroundImage3})` }}
        >
          <h3>Title 3</h3>
          <p>Small description of trending</p>
          <div className='trend'>
            <img src={trend3} />
            <a href=''>
              <span>r/trend</span>
            </a>
          </div>
        </div>

        <div
          className='trending'
          style={{ backgroundImage: `url(${backgroundImage4})` }}
        >
          <h3>Title 4</h3>
          <p>Small description of trending</p>
          <div className='trend'>
            <img src={trend4} />
            <a href=''>
              <span>r/trend</span>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Trending
