import { Link } from "react-router-dom"
import SignIn from "../SignIn"
import style from "../NavBar/navBar.module.css"
import user from "../../assets/user.png"
import Button from "../Button"
import React, { useState } from "react";
import PopUp from "../PopUp"
import wave from "../../assets/wave.svg"


function NavBar() {
  const [showSignIn, setShowSignIn] = useState(false);

    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
        console.log("Popup state:", showSignIn);

    };
    return(
      <>
      <div className={style.waveContainer}> 
        <img src={wave} alt="wave" className={style.waveContainer}/>
      </div>
        <nav className={style.navBar}> 
          <Link to="/" className={style.logo}>Be.TheCake</Link>
        
          <div className={style.links}>
              <ul>
                <li><Button label="Home" to="/" className={style.navButton} /> </li>
                <li><Button label="About" to="/about" className={style.navButton} /></li>
                <li><Button label="FAQ" to="/faq" className={style.navButton} /></li>
                <li><Button label="Gallery" to="/gallery" className={style.navButton} /></li>
              </ul>
          </div>
          <div className={style.signin}>
            <img src={user} alt="User Icon" className={style.userIcon} onClick={toggleSignIn} />
          </div>
          <PopUp show={showSignIn} onClose={toggleSignIn}>
              <SignIn />
          </PopUp>
      </nav>

      </>
    )
}
export default NavBar