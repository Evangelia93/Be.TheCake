import Button from "../../components/Button"
import "../BasicCakes/basicCakes.css"

function BasicCakes(params) {
    return(<>
        <h1>Choose your cake</h1>
        <Button label="Add to cart" className="basicCakesBtn"/>
    </>
    )
}

export default BasicCakes