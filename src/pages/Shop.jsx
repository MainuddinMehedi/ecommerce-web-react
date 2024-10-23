import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllProducts from "../components/all-products";
import Newsletter from "../components/newsletter";

import "../styles/shop.css";
import Pagination from "../components/Pagination";

const ShopPage = () => {
  return (
    <div>
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      <AllProducts />
      <Pagination />
      <Newsletter />
    </div>
  );
};

export default ShopPage;
