import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import './ModalPreview.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeModal } from '../../store/modal/modalSlice'
import ReactImageFallback from 'react-image-fallback'

const ModalPreview = () => {
  const dispatch = useDispatch()
  const { info } = useSelector(state => state.modal)
  console.log('Info for the modal : ', info)
  const modalHandler = () => {
    dispatch(changeModal.toggleModal())
  }

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
    <div class='modal'>
      <div class='modal-content'>
        <div className='modal-head'>
        <span class='close' onClick={modalHandler}>
          <Icon icon="eva:arrow-ios-back-fill" />
        </span>
        <p className='url-preview'>
          /
          {info?.kind === 't2'
            ? `u/${info?.data.name}`
            : info?.data.display_name_prefixed}
        </p>
        </div>
        <div className='modal-body'>
          <div className='name-and-photo'>
        <ReactImageFallback className='r-main-picture'
          src={
            info?.data.snoovatar_img?.trim() === ''
              ? info?.data.icon_img
              : info?.data.snoovatar_img
          }
          fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
        />
        <div className='karma-or-members'>
        <h2>
        {info?.kind === 't2'
            ? info?.data.name
            : info?.data.display_name}
        </h2>
        <span>
        {info?.kind === 't2'
            ? numFormatter(info?.data.link_karma + info?.data.comment_karma) + ' Karma'
            : numFormatter(info?.data.subscribers) + ' Members'}
        </span>
        </div>
        </div>
        <div className='user-content-filter'>
          <button className='btn-filter'>Posts</button>
          <button className='btn-filter btn-disabled'>Comments</button>
        </div>
        <div className='posts-content-section'>
          {/* Fetch data from user/community posts here */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPreview
