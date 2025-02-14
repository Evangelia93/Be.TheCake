import React from "react";
import Carousel from "../../components/Carousel";
import Button from "../../components/Button";
import style from "../Home/home.module.css"
import form from "../../assets/form.png"
import cake from "../../assets/cake.png"

function Home(params) {
    return(<>
    <div className={style.home}>
            <h3>Have you ever had a cake that made you smile from the first bite?<br /> If not, you’re in the right place. </h3><br />
            <h1>Discover our sweet creations!</h1>
            <div className={style.buttons}>
                <Button to="/cakeform" className={style.centerBtn} icon={<img src={form} alt="Custom Form" />} />
                <Button to="/basiccakes" className={style.centerBtn} icon={<img src={cake} alt="Basic Cakes" />} />
            </div>
            <Carousel className={style.carousel} />
        </div>
        </>
    )
} 

export default Home