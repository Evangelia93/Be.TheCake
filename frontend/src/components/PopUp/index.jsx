import React from "react";
import style from "../PopUp/popup.module.css"; 

function PopUp({ show, onClose, children }) {
    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("popup-overlay")) {
            onClose();
        }
    };

    return (
        <div className={style.popup-overlay} onClick={handleOverlayClick}>
            <div className={style.popup-content}>
                <span className={style.popup-close} onClick={onClose}>&times;</span>
                {children} 
            </div>
        </div>
    );
}

export default PopUp;