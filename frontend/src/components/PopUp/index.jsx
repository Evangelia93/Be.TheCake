import React from "react";
import "../PopUp/popup.css"; 

function PopUp({ show, onClose, children }) {
    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("popup-overlay")) {
            onClose();
        }
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-content">
                <span className="popup-close" onClick={onClose}>&times;</span>
                {children} 
            </div>
        </div>
    );
}

export default PopUp;