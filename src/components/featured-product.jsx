import { allProductsData } from "../fake-data/data";
import ProductCard from "./product-card";

import "../styles/product.css";

const FeaturedProduct = () => {

  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {allProductsData?.slice(0, 8).map((eachProduct) => (
          <ProductCard eachProduct={eachProduct} key={eachProduct.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
