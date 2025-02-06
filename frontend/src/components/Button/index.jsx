import React, { useState } from "react";
import "../Button/button.css"
import { useNavigate } from "react-router-dom";

function Button({ label, onClick, style, className, to, isPopUp, PopUpComponent, icon }) {
    const navigate = useNavigate();
    const [showPopUp, setPopUp] = useState(false);

    const handleClick = () => {
        if (to) {
            navigate(to);
            return;
        }

        if (onClick) {
            onClick();
        }

        if (isPopUp) {
            setPopUp(!showPopUp);
        }
    };

    return (
        <>
        <div className="btn">
            <button className={`button ${className}`} style={style} onClick={handleClick}>
                {icon && <span className="button-icon">{icon}</span>}   
                {label}
                
            </button>
                
        </div>
            {isPopUp && showPopUp && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setPopUp(false)}>&times;</span>
                        {PopUpComponent}
                    </div>
                </div>
            )}
        </>
    );
}

export default Button