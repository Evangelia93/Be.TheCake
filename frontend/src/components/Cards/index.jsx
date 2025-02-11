import "./card.css"
import Button from "../Button"
import addToCart from "../../assets/add-to-cart-svgrepo-com.svg"
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import cakeData from "../CakeData"


function Cards(onClick){
    
    return(<>
    <div className="grid">
        {cakeData.map((cake)=>( 
            <div key={cake.id} className="card-component">
                <div  className="card">
                    <Link to={`/basiccakes/${cake.id}`} >
                        <img src={cake.cakeImage} alt={cake.cakeName} className="card-image" />
                    </Link>
                    <h2 className="card-title">{cake.cakeName}</h2> 
                </div>
            </div>
        ))}
    </div>
    </>
    )
}

export default Cards