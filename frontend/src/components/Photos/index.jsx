import React from "react";
import StackGrid from "react-stack-grid";
import "../Photos/photos.css";
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
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <StackGrid
            columnWidth={250} // Προσαρμόζει το πλάτος της κάθε στήλης
            gutterWidth={10} // Απόσταση μεταξύ των εικόνων (οριζόντια)
            gutterHeight={10} // Απόσταση μεταξύ των εικόνων (κάθετα)
        >
            {images.map((imgSrc, index) => (
                <div className="pics" key={index}>
                    <img src={imgSrc} alt={`Cake ${index + 1}`} />
                </div>
            ))}
        </StackGrid>
    );
};

export default Photos;