// import { useEffect, useState } from "react";
import { allProductsData } from "../fake-data/data";
import ProductCard from "./product-card";

const RelevantProducts = () => {
  return (
    <section id="product1" className="section-p1">
      <h2>Relevant Products</h2>
      <p>Explore products that are similar.</p>
      <div className="pro-container">
        {allProductsData?.slice(0, 4).map((eachProduct) => (
          <ProductCard eachProduct={eachProduct} key={eachProduct.id} />
        ))}
      </div>
    </section>
  );
};

export default RelevantProducts;
