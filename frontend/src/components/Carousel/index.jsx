import React from "react";
import image1 from "../../assets/cakes/1.png"
import image2 from "../../assets/cakes/2.png"
import image3 from "../../assets/cakes/3.png"
import image4 from "../../assets/cakes/4.png"
import image5 from "../../assets/cakes/5.png"
import image6 from "../../assets/cakes/6.png"
import image7 from "../../assets/cakes/7.jpg"
import image8 from "../../assets/cakes/8.jpg"
import image9 from "../../assets/cakes/9.jpg"
import style from "../Carousel/carousel.module.css"

function Carousel(params) {
    return(<> 
         <div className={style.slider}>
            <div className={style.slideTrack}>
                <div className={style.slide}>
                    <img src={image1} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image2} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image3} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image4} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image5} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image6} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image7} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image8} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image9} alt="" />
                </div>
             
                <div className={style.slide}>
                    <img src={image1} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image2} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image3} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image4} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image5} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image6} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image7} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image8} alt="" />
                </div>
                <div className={style.slide}>
                    <img src={image9} alt="" />
                </div>
            </div>
         </div>
</>
)
}

export default Carousel