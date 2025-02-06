import React from "react";
import Carousel from "../../components/Carousel";
import Button from "../../components/Button";
import "../Home/home.css"
import form from "../../assets/form.png"
import cake from "../../assets/cake.png"

function Home(params) {
    return(<>
        <h3>Have you ever had a cake that made you smile from the first bite?<br /> If not, you’re in the right place. </h3><br />
        <h1>Discover our sweet creations!</h1>
        <div className="buttons">
        <Button to="/cakeform" className="centerBtn" icon={<img src={form} alt="Custom Form" />} />
        <Button to="/basiccakes" className="centerBtn" icon={<img src={cake} alt="Basic Cakes" />} />
        </div>
        <Carousel className="carousel" />
        </>
    )
} 

export default Home