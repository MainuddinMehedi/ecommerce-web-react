import { allProductsData } from "../fake-data/data";
import "../styles/product.css";
import ProductCard from "./product-card";

const NewArrivals = () => {
  return (
    <section id="product1" className="section-p1">
      <h2>New Arrivals</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {allProductsData?.slice(8, 16).map((eachProduct) => (
          <ProductCard eachProduct={eachProduct} key={eachProduct.id} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
