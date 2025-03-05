import style from "./card.module.css"
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import cakeData from "../CakeData"
import { useEffect } from "react";
import { gsap } from "gsap";

function Cards(){
    
    useEffect(()=>{
        gsap.to(`.${style.cardComponent}`, {
            opacity:1,
            y: 20,
            duration: 0.8,
            stagger: 0.3,
            ease: "back.out"
        })
    },[])

    return(<>
    <div className={style.grid}>
        {cakeData.map((cake)=>( 
            <div key={cake.id} className={style.cardComponent}>
                <div  className={style.card}>
                    <Link to={`/basiccakes/${cake.id}`} >
                        <img src={cake.cakeImage} alt={cake.cakeName} className={style.cardImage} />
                    </Link>
                    <h2 className={style.cardTitle}>{cake.cakeName}</h2> 
                </div>
            </div>
        ))}
    </div>
    </>
    )
}

export default Cards