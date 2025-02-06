import React from "react";
import "../Footer/footer.css"

function Footer(params) {
    return(
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Be.TheCake</p>
        </footer>
    )
}

export default Footer