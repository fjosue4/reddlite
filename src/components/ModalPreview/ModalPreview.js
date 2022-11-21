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

  return (
    <div class='modal'>
      <div class='modal-content'>
        <div className='modal-head'>
        <span class='close' onClick={modalHandler}>
          &times;
        </span>
        <p className='url-preview'>
          /
          {info?.kind === 't2'
            ? `u/${info?.data.name}`
            : info?.data.display_name_prefixed}
        </p>
        </div>
        <div className='body'>
          <div className='name-and-photo'></div>
        <ReactImageFallback
          src={
            info?.data.snoovatar_img?.trim() === ''
              ? info?.data.icon_img
              : info?.data.snoovatar_img
          }
          fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
        />
        <h2>
        {info?.kind === 't2'
            ? info?.data.name
            : info?.data.display_name}
        </h2>
        </div>
      </div>
    </div>
  )
}

export default ModalPreview
