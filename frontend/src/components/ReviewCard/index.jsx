import style from "../ReviewCard/reviewCard.module.css";
import ReviewData from "../ReviewData";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewCard() {
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };    
      return (
        <div className={style.slideContainer}>
            <div className={style.slideContent}>
            <Slider {...settings} className={style.Slider}>
                {ReviewData.map((review, index) => (
                        <div className={style.card} key={index}>
                            <div className={style.cardImage}>
                                <img src={review.image} alt={review.name} className={style.cardImg} />
                            </div>
                            <div className={style.cardText}>
                                <h3 className={style.name}>{review.name}</h3>
                                <p className={style.comment}>{review.comment}</p>
                                <p className={style.star}>{review.star}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ReviewCard;