import React from "react";
import { useSelector, useDispatch } from 'react-redux'

function PostModal () {
    const {post, comments} = useSelector(state => state.post)

    const commentsData = comments.map(({ data }) => ({
        author: data?.author,
        body: data?.body,
        body_html: data?.body_html,
        created: data?.created,
        utc: data?.created_utc,
        up: data?.up,
        score: data?.score,
        name: data?.subreddit_name_prefixed,
      }))

    return(
        <div>
            <h1>{post.data?.title}</h1>
            <>{commentsData.map((item) => {
            return (
              <ul key={item.created}>
                <li>{item.author}</li>
                <li>{item.body}</li>
                <li>{new Date(item.created).toLocaleDateString()}</li>
              </ul>
            )
          })}</>
        </div>
    )
}

export default PostModal;