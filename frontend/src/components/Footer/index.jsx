import React from "react";
import style from "../Footer/footer.module.css"

function Footer(params) {
    return(
        <footer className={style.footer}>
            <p>&copy; {new Date().getFullYear()} Be.TheCake</p>
        </footer>
    )
}

export default Footer