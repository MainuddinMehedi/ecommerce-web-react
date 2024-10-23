import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faOutdent,
  faShoppingBag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { logo } from "../utils/img-imports";
import { useState } from "react";

function Navbar() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState('');

  return (
    <div className="navbar">
      <div>
        <Link to={"/"}>
          <img src={logo} className="logo-img" alt="cara logo" />
        </Link>
      </div>
      <div>
        <ul className={`nav-quick-links ${hamburgerMenuOpen}`}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li id="lg-bag">
            <NavLink
              to={"/cart"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faShoppingBag} size="lg" />
            </NavLink>
          </li>
          <NavLink id="close" onClick={()=> setHamburgerMenuOpen('')}>
            <FontAwesomeIcon icon={faTimes} />
          </NavLink>
        </ul>
      </div>
      <div id="mobile">
        <Link>
          <FontAwesomeIcon icon={faBagShopping} size="lg" aria-hidden="true" />
        </Link>
        <i id="bar" onClick={()=> setHamburgerMenuOpen('active')}>
          <FontAwesomeIcon icon={faOutdent} />
        </i>
      </div>
    </div>
  );
}

export default Navbar;
