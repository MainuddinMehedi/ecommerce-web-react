import { allProductsData } from "../fake-data/data"; // when I'll have real data form a api this allProductsData will be coming form context. 
import ProductCard from "./product-card";

import "../styles/product.css";

const AllProducts = () => {
  return (
    <section id="product1" className="section-p1">
      <h2>All Products</h2>
      <p>Browse through all the products available for you.</p>
      <div className="pro-container">
        {allProductsData?.map((eachProduct) => (
          <ProductCard eachProduct={eachProduct} key={eachProduct.id} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
