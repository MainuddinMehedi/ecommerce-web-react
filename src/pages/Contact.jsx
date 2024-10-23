import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Newsletter from "../components/newsletter";
import { faClock, faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { contactImg1, contactImg2, contactImg3 } from "../utils/img-imports";

import "../styles/contact.css";

const ContactPage = () => {
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#lets_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              {/* <i className="fal fa-map"></i> */}
              <FontAwesomeIcon icon={faMap} />
              <p>56 Glassford Street Glasgow G1 1UL New Yourk</p>
            </li>
            <li>
              {/* <i className="fal fa-envelope"></i> */}
              <FontAwesomeIcon icon={faEnvelope} />
              <p>contact@example.com</p>
            </li>
            <li>
              {/* <i className="fal fa-phone-alt"></i> */}
              <FontAwesomeIcon icon={faPhoneAlt} />
              <p>contact@example.com</p>
            </li>
            <li>
              {/* <i className="fal fa-clock"></i> */}
              <FontAwesomeIcon icon={faClock} />
              <p>Monday to Saturday: 9:00am to 16pm</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3764050616905!2d90.3903449102899!3d23.733953189319784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e90a449e4f%3A0xb7092a9c25197fa4!2sUniversity%20of%20Dhaka!5e0!3m2!1sen!2sbd!4v1718862434865!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src={contactImg1} />
            <p>
              <span>John Doe</span> Senior Marketing Manager <br />
              Phone: + 000 123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src={contactImg2} />
            <p>
              <span>William Smith </span> Senior Marketing Manager <br />
              Phone: + 000 123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src={contactImg3} />
            <p>
              <span>Emma Stone </span> Senior Marketing Manager <br />
              Phone: + 000 123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default ContactPage;
