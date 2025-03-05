import Cards from "../../components/Cards"
import style from "../BasicCakes/basicCakes.module.css"
import gsap from "gsap"
import { useEffect } from "react"

function BasicCakes() {

useEffect(()=>{
    gsap.fromTo(`.${style.title}`,
        {x: 900, opacity: 1},
        {x: 0, opacity: 1, duration: 2, ease: "elastic.out(2, 0.3)"}
    )
    })
    return(<>
    <div className={style.basicCake}>
        <h1 className={style.title}>Choose your cake</h1>
         <Cards />
    </div>    
    </>
    )
}

export default BasicCakes