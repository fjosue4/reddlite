import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from "@iconify/react";
import './ModalPreview.css'
import { postSliceActions } from '../../store/post/postSlice'

function PostModal () {
    const {post, comments} = useSelector(state => state.post)
    const dispatch = useDispatch();
    const changeModal = postSliceActions.toggleModal();

    const modalHandler = () => {
      dispatch(changeModal)
    }

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
      <div class="modal">
      <div class="modal-content">
        <div className="modal-head">
          <span class="close" onClick={modalHandler}>
            <Icon icon="eva:arrow-ios-back-fill" />
          </span>
          <p className="url-preview">
            /
            {`u/${post.data?.name}`}

          </p>
        </div>
        </div>
            {/* <h1>{post.data?.title}</h1>
            {commentsData.map((item) => {
            return (
              <ul key={item.created}>
                <li>{item.author}</li>
                <li>{item.body}</li>
                <li>{new Date(item.created).toLocaleDateString()}</li>
              </ul>
            )
          })} */}
        </div>
    )
}

export default PostModal;