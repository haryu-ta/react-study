import React from 'react'
import { useDispatch } from 'react-redux'
import { allClear } from "../features/cart/CartSlice"
import { closeModal } from '../features/modal/ModalSlice'

const Modal = () => {

    const dispatch = useDispatch();

    // OKボタン押下
    const okClickHander = () => {
        dispatch(allClear());
        dispatch(closeModal());
    }

    return (
        <aside className='modal-container'>
            <div className="modal">
                <h4>買い物かごを全て空にしますか？</h4>
                <div className='btn-container'>
                    <button className="btn confirm-btn" onClick={okClickHander}>OK</button>
                    <button className="btn clear-btn" onClick={() => dispatch(closeModal())}>やめておく</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal