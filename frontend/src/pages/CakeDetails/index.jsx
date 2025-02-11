import { useParams } from "react-router-dom";
import cakeData from "../../components/CakeData";
import Button from "../../components/Button"
import addToCart from "../../assets/add-to-cart-svgrepo-com.svg"
import "../CakeDetails/cakeDetails.css"

function CakeDetails() {
  const { id } = useParams(); // ✅ Παίρνει το ID από το URL
  const cake = cakeData.find((c) => c.id === id); // ✅ Βρίσκει τη σωστή τούρτα

  if (!cake) {
    return <h2>Η τούρτα δεν βρέθηκε!</h2>;
  }

  return (
    <div className="cake-details">
      <img src={cake.cakeImage} alt={cake.cakeName} className="cake-image" />
      <div className="h2-description">
        <h2 className="title">{cake.cakeName}</h2>
        <p className="description">{cake.cakeDescription}</p>
        <div className="price-btn">
          <p className="price">Price: {cake.cakePrice}</p>
          <Button icon={<img src={addToCart} alt="Add to cart" className="btn-image"/>} className="btn"/>
        </div>
      </div>
    </div>
  );
}

export default CakeDetails;