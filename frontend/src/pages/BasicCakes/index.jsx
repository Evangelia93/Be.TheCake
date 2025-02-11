import Cards from "../../components/Cards"
import "../BasicCakes/basicCakes.css"

function BasicCakes(params) {
    return(<>
    <div className="basicCake">
        <h1 className="title">Choose your cake</h1>
        <Cards />
    </div>    
    </>
    )
}

export default BasicCakes