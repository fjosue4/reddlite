import React from 'react'
import ReactImageFallback from 'react-image-fallback'
import { useSelector } from 'react-redux'
import './SearchedResult.css'
import { Icon } from '@iconify/react'

const SearchedResult = () => {
  const { data } = useSelector(state => state.search)

  // Number formatter changes number to 'k' or 'm' accordingly
  const numFormatter = num => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K'
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num < 900) {
      return num
    }
  }

  return (
    <div className='all-search-results'>
      {data?.map(d => (
        <div className='search-results-container'>
          {/* Checking if the search result is user type or community type */}
          {d.kind === 't2' ? (
            <div className='search-result search-user'>
              {/* Image or Icon */}
              <ReactImageFallback
                  src={
                    d.data.snoovatar_img?.trim() === ''
                      ? d.data.icon_img
                      : d.data.snoovatar_img
                  }
                  fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
                />
                <div className='search-content'>
                {/* UserName */}
              u/{d.data.name}
              {/* Type of content */}
              <div className='search-category'>
              <span>User</span>
              <Icon icon="akar-icons:circle-fill" className='circle-divider' />
                {/* Karma of content */}
                {numFormatter(d.data.link_karma + d.data.comment_karma)} Karma 
              </div>
              </div>
            </div>
          ) : (
            <div className='search-result search-community'>
              {/* Icon  of the community */}
              <ReactImageFallback
                  src={d.data.icon_img}
                  fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
                />
              <div className='search-content'>
              {/* Display name of the community */}
              {d.data.display_name_prefixed}
                <div className='search-category'>
                <span>Community</span>
                <Icon icon="akar-icons:circle-fill" className='circle-divider' />
                {/* Subscriber or member count for the community */}
                {numFormatter(d.data.subscribers)}
              </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default SearchedResult
