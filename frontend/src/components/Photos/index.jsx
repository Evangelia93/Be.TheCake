import React from "react";
import StackGrid from "react-stack-grid";
import style from "../Photos/photos.module.css";
import img1 from "../../assets/cakes/1.jpg";
import img2 from "../../assets/cakes/2.jpg";
import img3 from "../../assets/cakes/3.jpg";
import img4 from "../../assets/cakes/4.jpg";
import img5 from "../../assets/cakes/5.jpg";
import img6 from "../../assets/cakes/6.jpg";
import img7 from "../../assets/cakes/7.jpg";
import img8 from "../../assets/cakes/8.jpg";
import img9 from "../../assets/cakes/9.jpg";

const Photos = () => {
    // const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        // <StackGrid
        //     columnWidth={250} // Προσαρμόζει το πλάτος της κάθε στήλης
        //     gutterWidth={10} // Απόσταση μεταξύ των εικόνων (οριζόντια)
        //     gutterHeight={10} // Απόσταση μεταξύ των εικόνων (κάθετα)
        // >
        //     {images.map((imgSrc, index) => (
        //         <div className={style.pics} key={index}>
        //             <img src={imgSrc} alt={`Cake ${index + 1}`} />
        //         </div>
        //     ))}
        // </StackGrid>
        <div className="container">


            <div className={style.galleryCotainer}>
                <div className={style.galleryItem}>
                    <iv className={style.image}>
                        <img src={img1} alt="Image 1"/>
                    </iv>
                </div>
            </div>

            <div classname={style.gallerycotainer}>
                <div className={style.galleryItem}>
                    <div className={style.image}>
                        <img src={img2} alt="Image 1"/>
                    </div>
                </div>
            </div>

            <div classname={style.gallerycotainer}>
                <div className={style.galleryItem}>
                    <div className={style.image}>
                        <img src={img3} alt="Image 1"/>
                    </div>
                </div>
            </div>

            <div classname={style.gallerycotainer}>
                <div className={style.galleryItem}>
                    <div className={style.image}>
                        <img src={img4} alt="Image 1"/>
                    </div>
                </div>
            </div>

            <div classname={style.gallerycotainer}>
                <div className={style.galleryItem}>
                    <div className={style.image}>
                        <img src={img5} alt="Image 1"/>
                    </div>
                </div>
            </div>

            <div classname={style.gallerycotainer}>
                <div className={style.galleryItem}>
                    <div className={style.image}>
                        <img src={img6} alt="Image 1"/>
                    </div>
                </div>
            </div>

            <div classname={style.gallerycotainer}>
                <div className={style.galleryItem}>
                    <div className={style.image}>
                        <img src={img7} alt="Image 1"/>
                    </div>
                </div>
            </div>

            <div classname={style.gallerycotainer}>
                <div className={style.galleryItem}>
                    <div className={style.image}>
                        <img src={img8} alt="Image 1"/>
                    </div>
                </div>
            </div> 

            <div classname={style.gallerycotainer}>
                <div className={style.galleryItem}>
                    <div className={style.image}>
                        <img src={img9} alt="Image 1"/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Photos;