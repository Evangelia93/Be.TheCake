import React from "react";
import Button from "../Button";
import image1 from "../../assets/cakes/1.jpg"
import image2 from "../../assets/cakes/2.jpg"
import image3 from "../../assets/cakes/3.jpg"
import image4 from "../../assets/cakes/4.jpg"
import image5 from "../../assets/cakes/5.jpg"
import image6 from "../../assets/cakes/6.jpg"
import image7 from "../../assets/cakes/7.jpg"
import image8 from "../../assets/cakes/8.jpg"
import image9 from "../../assets/cakes/9.jpg"
import "../Carousel/carousel.css"

function Carousel(params) {
    return(<> 
         <div className="slider">
            <div className="slide-track">
                <div className="slide">
                    <img src={image1} alt="" />
                </div>
                <div className="slide">
                    <img src={image2} alt="" />
                </div>
                <div className="slide">
                    <img src={image3} alt="" />
                </div>
                <div className="slide">
                    <img src={image4} alt="" />
                </div>
                <div className="slide">
                    <img src={image5} alt="" />
                </div>
                <div className="slide">
                    <img src={image6} alt="" />
                </div>
                <div className="slide">
                    <img src={image7} alt="" />
                </div>
                <div className="slide">
                    <img src={image8} alt="" />
                </div>
                <div className="slide">
                    <img src={image9} alt="" />
                </div>
             
                <div className="slide">
                    <img src={image1} alt="" />
                </div>
                <div className="slide">
                    <img src={image2} alt="" />
                </div>
                <div className="slide">
                    <img src={image3} alt="" />
                </div>
                <div className="slide">
                    <img src={image4} alt="" />
                </div>
                <div className="slide">
                    <img src={image5} alt="" />
                </div>
                <div className="slide">
                    <img src={image6} alt="" />
                </div>
                <div className="slide">
                    <img src={image7} alt="" />
                </div>
                <div className="slide">
                    <img src={image8} alt="" />
                </div>
                <div className="slide">
                    <img src={image9} alt="" />
                </div>
            </div>
         </div>
<div className="carouselBtn">
    <Button to="/gallery" label={"Go to gallery page"} className="goToGalleryBtn" />
</div>
</>
)
}

export default Carousel