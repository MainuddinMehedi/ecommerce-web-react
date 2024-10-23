import { Link, useParams } from "react-router-dom";
import { f1, f2, f3, f4 } from "../utils/img-imports";
import { allProductsData } from "../fake-data/data";

import "../styles/productDetails.css";
import Newsletter from "../components/newsletter";
import RelevantProducts from "../components/relevantProducts";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState();
  const { id } = useParams();

  // const image = Object.entries(selectedProduct?.imageUrl)[0][1];
  // setSelectedImage(image);

  console.log(selectedImage);

  useEffect(() => {
    const product = allProductsData?.find((item) => item.id === parseInt(id));
    setSelectedProduct(product);

    const image = Object.entries(product?.imageUrl)[0][1];
    setSelectedImage(image);
  }, [id]);

  return (
    <>
      <div id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={selectedImage} width="100%" id="mainImg" alt="" />

          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src={f1}
                onClick={() => setSelectedImage(f1)}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src={f2}
                onClick={() => setSelectedImage(f2)}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src={f3}
                onClick={() => setSelectedImage(f3)}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src={f4}
                onClick={() => setSelectedImage(f4)}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="single-pro-details">
          <h6>
            <Link to={"/"}>Home</Link> / <Link to={"/shop"}>Shop</Link>
          </h6>
          <h4>{selectedProduct?.title}</h4>
          <h2>${selectedProduct?.price}</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add To Cart</button>
          <h4>product details</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatem ullam labore expedita quasi quod velit soluta saepe.
            Amet, quam minus quibusdam quisquam ex ad temporibus numquam facere
            ducimus autem hic vitae. Id voluptatibus, soluta reprehenderit in
            sapiente neque, laudantium, hic temporibus sint quibusdam ea nulla
            assumenda nihil quia architecto!
          </span>
        </div>
      </div>

      <RelevantProducts />
      <Newsletter />
    </>
  );
};

export default ProductDetails;
