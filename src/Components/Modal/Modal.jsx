import React from 'react'

import './Modal.css'

function Modal() {
  return (
    <div className="overlay">
        <div className="modal">
            <div className="modalRight">
                <img className='imgModal' src="" alt="" />
            </div>
            <div className="modalLeft">
                {/* close btn */}
                <h1>Title</h1>
                <span>Sub-title</span>
                <span>text for description</span>
                <button className='button'>OK</button>
            </div>
        </div>
    </div>
  )
}

export default Modal