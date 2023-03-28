import React, { useState } from "react";

import "./Modal.css";

function Modal() {
    const [modal, setModal] = useState(false);

    const showModal = () => setModal(!modal);

    return (
        <div className={modal ? "overlay active" : "overlay"}>
            <div className="modal">
                <div className="modalRight">
                    <img className="imgModal" src="" alt="" />
                </div>
                <div className="modalLeft">
                    {/* close btn */}
                    <h1>Title</h1>
                    <span>Sub-title</span>
                    <span>text for description</span>
                    <button className="button" onClick={showModal}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
