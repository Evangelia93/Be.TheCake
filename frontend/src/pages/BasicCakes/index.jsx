import Cards from "../../components/Cards"
import style from "../BasicCakes/basicCakes.module.css"

function BasicCakes(params) {
    return(<>
    <div className={style.basicCake}>
        <h1 className={style.title}>Choose your cake</h1>
        <Cards />
    </div>    
    </>
    )
}

export default BasicCakes