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
        <span class='close' onClick={modalHandler}>
          &times;
        </span>
        <p>{info?.kind}</p>
        <p>
          Preview text{' '}
          {info?.kind === 't2'
            ? info?.data.name
            : info?.data.display_name_prefixed}
        </p>
        <ReactImageFallback
          src={
            info?.data.snoovatar_img?.trim() === ''
              ? info?.data.icon_img
              : info?.data.snoovatar_img
          }
          fallbackImage='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png'
        />
      </div>
    </div>
  )
}

export default ModalPreview
