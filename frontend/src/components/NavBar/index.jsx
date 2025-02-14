import { Link } from "react-router-dom"
import SignIn from "../SignIn"
import logo from "../../assets/logo.jpg"
import style from "../NavBar/navBar.module.css"
import user from "../../assets/user.png"
import Button from "../Button"
import React, { useState } from "react";
import PopUp from "../PopUp"

function NavBar(params) {
  const [showSignIn, setShowSignIn] = useState(false);

    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
    };
    return(
        <nav className={style.navBar}> 
        <Link to="/" className={style.logo}>
            <img src={logo} alt="LOGO" className={style.logo-image} />
         </Link>
         
          <div className={style.links}>
              <ul>
                <li><Button label="Home" to="/" className={style.nav-button} /> </li>
                <li><Button label="About" to="/about" className={style.nav-button} /></li>
                <li><Button label="FAQ" to="/faq" className={style.nav-button} /></li>
              </ul>
          </div>
          <div className={style.signin}>
            <img src={user} alt="User Icon" className={style.user-icon} onClick={toggleSignIn} />
          </div>
          <PopUp show={showSignIn} onClose={toggleSignIn}>
              <SignIn />
          </PopUp>
      </nav>
    )
}
export default NavBar