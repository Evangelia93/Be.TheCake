import React from "react"
import style from "../SignIn/signIn.module.css"
import SignUp from "../SignUp"
import { Link } from "lucide-react"
import email from "../../assets/email.svg"
import password from "../../assets/password.svg"
import eye from "../../assets/eye.svg"
import logo from "../../assets/logo.png"

function SignIn(params) {
    return(<>
    <div className={style.screen1}>
        <img src={logo} alt="Logo" className={style.logo}/>

        <div className={style.email}>
            <label for="email">Email Address</label>
            <div className={style.imgInput}>
                <img src={email} alt="" className={style.image}/>
                <input type="email" name="email" placeholder="Username@gmail.com"/>
            </div>
        </div>

        <div className={style.password}>
            <label for="password">Password</label>
            <div className={style.imgInput}>
                <img src={password} alt="" className={style.image}/>
                <input className={style.pas} type="password" name="password" placeholder="············"/>
                <div className="iconEye">
                    <img src={eye} alt="" className={style.eye}/>
                </div>
        </div>
        </div>
            <button className={style.login}>Login</button>
        <div className={style.footer}><span>Sign up</span><span>Forgot Password?</span></div>
        </div>  
</>
    )
}

export default SignIn;