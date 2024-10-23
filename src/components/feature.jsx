import "../styles/feature.css";
import {
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
} from "../utils/img-imports";

function Feature() {
  return (
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src={feature1} alt="" />
        <h6>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={feature2} alt="" />
        <h6>Online Order</h6>
      </div>
      <div className="fe-box">
        <img src={feature3} alt="" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src={feature4} alt="" />
        <h6>Promotions</h6>
      </div>
      <div className="fe-box">
        <img src={feature5} alt="" />
        <h6>Happy Sell</h6>
      </div>
      <div className="fe-box">
        <img src={feature6} alt="" />
        <h6>F24/7 Support</h6>
      </div>
    </section>
  );
}

export default Feature;
