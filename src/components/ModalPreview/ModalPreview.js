import React, { useState } from "react";
import { Icon } from "@iconify/react";
import './ModalPreview.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeModal } from "../../store/modal/modalSlice";

const ModalPreview = () => {
    const dispatch = useDispatch()

    const hideModal = () => {
        dispatch(changeModal.setModal())
    }

    return (
    <div class="modal">
        <div class="modal-content">
            <span class="close" onClick={hideModal}>&times;</span>
            <p>Preview text</p>
        </div>
    </div>
    )
};

export default ModalPreview;