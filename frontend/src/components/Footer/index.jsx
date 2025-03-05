import React from "react";
import style from "../Footer/footer.module.css"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"


function Footer(params) {
    return(
        <footer className={style.footer}>
           
                <p className={style.text}>&copy; {new Date().getFullYear()} Be.TheCake</p>
                <div className={style.social}>
                    <img src={instagram} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                </div>
           
        </footer>
    )
}

export default Footer