import { f1, f2, f3 } from "../utils/img-imports";

import "../styles/cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const Cart = () => {
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#Cart_items</h2>
        <p>Have a look at the things you've added in the cart</p>
      </section>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="">
                  {/* <i className="far fa-times-circle"></i> */}
                  <FontAwesomeIcon icon={faTimesCircle} />
                </a>
              </td>
              <td>
                <img src={f1} />
              </td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
            <tr>
              <td>
                <a href="">
                  {/* <i className="far fa-times-circle"></i> */}
                  <FontAwesomeIcon icon={faTimesCircle} />
                </a>
              </td>
              <td>
                <img src={f2} />
              </td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
            <tr>
              <td>
                <a href="">
                  {/* <i className="far fa-times-circle"></i> */}
                  <FontAwesomeIcon icon={faTimesCircle} />
                </a>
              </td>
              <td>
                <img src={f3} />
              </td>
              <td>Cartoon Astronaut T-Shirts</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter your coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ 336</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$335</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
