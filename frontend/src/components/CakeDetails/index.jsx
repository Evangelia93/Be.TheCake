import { useParams } from "react-router-dom";
import cakeData from "../../components/CakeData";
import Button from "../../components/Button"
import addToCart from "../../assets/add-to-cart-svgrepo-com.svg"
import style from "../CakeDetails/cakeDetails.module.css"

function CakeDetails() {
  const { id } = useParams(); // ✅ Παίρνει το ID από το URL
  const cake = cakeData.find((c) => c.id === id); // ✅ Βρίσκει τη σωστή τούρτα

  if (!cake) {
    return <h2>Cake not found!</h2>;
  }

  return (
    <div className={style.cakeDetails}>
      <img src={cake.cakeImage} alt={cake.cakeName} className={style.cakeImage} />
      <div className={style.h2Description}>
        <h2 className={style.title}>{cake.cakeName}</h2>
        <p className={style.description}>{cake.cakeDescription}</p>
        <div className={style.priceBtn}>
          <p className={style.price}>Price: {cake.cakePrice}</p>
          <Button icon={<img src={addToCart} alt="Add to cart" className={style.btnImage}/>} className={style.btn}/>
        </div>
      </div>
    </div>
  );
}

export default CakeDetails;