import React, { useState } from "react";
import styles from "../Button/button.module.css"
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
        <div className={styles.btn}>
            <button className={`button ${className}`} style={style} onClick={handleClick}>
                {icon && <span className={styles.buttonIcon}>{icon}</span>}   
                {label}
                
            </button>
                
        </div>
            {isPopUp && showPopUp && (
                <div className={styles.modal}>
                    <div className={styles.modal-content}>
                        <span className={styles.close} onClick={() => setPopUp(false)}>&times;</span>
                        {PopUpComponent}
                    </div>
                </div>
            )}
        </>
    );
}

export default Button