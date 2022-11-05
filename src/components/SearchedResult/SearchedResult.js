import React from 'react'
import ReactImageFallback from 'react-image-fallback'
import { useSelector } from 'react-redux'

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
    <div>
      {data?.map(d => (
        <>
          {d.kind === 't2' ? (
            <>
              <h1>
                User
                <br />
                Karma {numFormatter(d.data.link_karma + d.data.comment_karma)}
                <br />
                Name u/{d.data.name}
                <br />
              </h1>

              <ReactImageFallback
                src={
                  d.data.snoovatar_img?.trim() === ''
                    ? d.data.icon_img
                    : d.data.snoovatar_img
                }
                fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
              />
              <hr />
            </>
          ) : (
            <>
              <h1>
                Community {d.data.subreddit_type}
                <br />
                {d.data.display_name_prefixed}
                <br />
                {numFormatter(d.data.subscribers)}
              </h1>
              <ReactImageFallback
                src={d.data.icon_img}
                fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
              />
              <hr />
            </>
          )}
        </>
      ))}
    </div>
  )
}

export default SearchedResult
