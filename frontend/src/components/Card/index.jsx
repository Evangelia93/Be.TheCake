import "../Card/card.css"
import naked from "../../assets/basicCakes/naked-cake.jpg"
import chocolate from "../../assets/basicCakes/chocolate.jpg"
import lemon from "../../assets/basicCakes/lemon.jpg"
import oreo from "../../assets/basicCakes/oreo.jpg"
import redVelvet from "../../assets/basicCakes/red-velvet.jpg"
import biscoff from "../../assets/basicCakes/biscoff.jpg"
import Button from "../Button"
import addToCart from "../../assets/add-to-cart-svgrepo-com.svg"

function Card(){
    return(<>
    <div className="grid">
        <div className="card-component">
            <div className="card">
                <img src={naked} alt="" className="card-image"/>
                <h2 className="card-title">Naked Cake</h2> 
            </div>
        </div>

        <div className="card-component">
            <div className="card">
                <img src={chocolate} alt="" className="card-image"/>
                <h2 className="card-title">Chocolate Cake</h2>
            </div>
        </div>

        <div className="card-component">
            <div className="card">
                <img src={lemon} alt="" className="card-image"/>
                <h2 className="card-title">Lemon Cake</h2>
            </div>
        </div>

        <div className="card-component">
            <div className="card">
                <img src={oreo} alt="" className="card-image"/>
                <h2 className="card-title">Oreo Cake</h2>
            </div>
        </div>

        <div className="card-component">
            <div className="card">
                <img src={redVelvet} alt="" className="card-image"/>
                <h2 className="card-title">Red Velvet Cake</h2>
            </div>
        </div>

        <div className="card-component">
            <div className="card">
                <img src={biscoff} alt="" className="card-image"/>
                <h2 className="card-title">Biscoff Cake</h2>
            </div>
        </div>
    </div>
    </>
    )
}

export default Card