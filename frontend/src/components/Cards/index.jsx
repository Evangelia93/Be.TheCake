import style from "./card.module.css"

import addToCart from "../../assets/add-to-cart-svgrepo-com.svg"
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import cakeData from "../CakeData"


function Cards({onClick}){
    
    console.log(cakeData); 

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