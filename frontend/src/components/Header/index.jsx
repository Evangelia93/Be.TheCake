import React from "react";
import style from "../Header/header.module.css";
import NavBar from "../NavBar/index";


function Header() {
    return (
        <div className={style.header}>
            <NavBar />
        </div>
        );
    }
    
export default Header;