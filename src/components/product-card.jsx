import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/productCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ eachProduct }) => {
  const navigate = useNavigate();
  const imageUrl = Object.values(eachProduct.imageUrl)[0];

  const { brand, title, price } = eachProduct;

  const id = eachProduct.id;

  // console.log(id);

  return (
    <div className="pro" onClick={() => navigate(`/productDetails/${id}`)}>
      <img src={imageUrl} />

      <div className="des">
        <span>{brand}</span>
        <h5>{title}</h5>
        <div className="star">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <h4>${price}</h4>
      </div>
      <a href="#" className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
    </div>
  );
};

export default ProductCard;
