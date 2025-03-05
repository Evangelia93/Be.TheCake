import React from "react";
import Carousel from "../../components/Carousel";
import Button from "../../components/Button";
import style from "../Home/home.module.css"
import form from "../../assets/form.png"
import cake from "../../assets/cake.png"
import ReviewCard from "../../components/ReviewCard";

function Home(params) {
    return(<>
        <Carousel className={style.carousel} />
         <div className={style.home}>
            <div className="content">
                <h1>Make a choice</h1>
                <div className={style.buttons}>
                    <Button to="/cakeform" className={style.centerBtn} icon="Create your cake" alt="Custom Form" />
                    <Button to="/basiccakes" className={style.centerBtn} icon="Choose a cake" alt="Basic Cakes" />
                </div>
            </div>
        </div>
        <div className={style.reviewContainer}>
            <h3 className={style.reviewTitle}>Reviews</h3>
            <ReviewCard />
        </div>
        </>
    )
} 

export default Home
{/* <h3>Have you ever had a cake that made you smile from the first bite?<br /> If not, you’re in the right place. </h3><br /> */}