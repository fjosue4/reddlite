import React from 'react'
import ReactImageFallback from 'react-image-fallback'
import { useSelector } from 'react-redux'
import './SearchedResult.css'

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
    <div className='search-result'>
      {data?.map(d => (
        <>
          {/* Checking if the search result is user type or community type */}
          {d.kind === 't2' ? (
            <>
              {/* Type of content */}
              <h1>User</h1>
              {/* Karma of content */}
              <div>
                Karma {numFormatter(d.data.link_karma + d.data.comment_karma)}
              </div>
              {/* UserName */}
              <div>u/{d.data.name}</div>
              {/* Image or Icon */}
              <div>
                <ReactImageFallback
                  src={
                    d.data.snoovatar_img?.trim() === ''
                      ? d.data.icon_img
                      : d.data.snoovatar_img
                  }
                  fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
                />
              </div>
            </>
          ) : (
            <>
              {/* Type of content */}
              <h1>Community</h1>
              {/* Subscriber or member count for the community */}
              <div>{numFormatter(d.data.subscribers)}</div>
              {/* Display name of the community */}
              <div>{d.data.display_name_prefixed}</div>
              {/* Icon  of the community */}
              <div>
                <ReactImageFallback
                  src={d.data.icon_img}
                  fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
                />
              </div>
            </>
          )}
        </>
      ))}
    </div>
  )
}

export default SearchedResult
