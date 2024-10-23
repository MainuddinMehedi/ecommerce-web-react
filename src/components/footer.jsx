import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/footer.css";
import {playStore, appStore, paymentCard, logo} from "../utils/img-imports";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src={logo} className="logo" alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> 562 Wellington Road, Street 32, San
          Francisco
        </p>
        <p>
          <strong>Phone: </strong> +01 2222 365 / (+91) 01 23456789
        </p>
        <p>
          <strong>Hours: </strong> 10:00 - 18:00, Mon - Sat
        </p>

        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i><FontAwesomeIcon icon={faFacebook} /></i>
            <i><FontAwesomeIcon icon={faTwitter} /></i>
            <i><FontAwesomeIcon icon={faInstagram} /></i>
            <i><FontAwesomeIcon icon={faPinterest} /></i>
            <i><FontAwesomeIcon icon={faYoutube} /></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Condition</a>
        <a href="#">Contact</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src={appStore} alt="" />
          <img src={playStore} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={paymentCard} alt="" />
      </div>

      <div className="copyright">
        <p>© 2024, Mainuddn Mehedi - E-commerce Template</p>
      </div>
    </footer>
  );
};

export default Footer;
