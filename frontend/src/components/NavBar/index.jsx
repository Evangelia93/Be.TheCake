import { Link } from "react-router-dom"
import SignIn from "../SignIn"
import logo from "../../assets/logo.jpg"
import "../NavBar/navBar.css"
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
        <nav className="navBar"> 
        <Link to="/" className="logo">
            <img src={logo} alt="LOGO" className="logo-image" />
         </Link>
         
          <div className="links">
              <ul>
                <li><Button label="Home" to="/" className="nav-button" /> </li>
                <li><Button label="About" to="/about" className="nav-button" /></li>
                <li><Button label="FAQ" to="/faq" className="nav-button" /></li>
              </ul>
          </div>
          <div className="signin">
            <img src={user} alt="User Icon" className="user-icon" onClick={toggleSignIn} />
          </div>
          <PopUp show={showSignIn} onClose={toggleSignIn}>
              <SignIn />
          </PopUp>
      </nav>
    )
}
export default NavBar