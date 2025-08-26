import { useState } from "react";
import "./NavBar.css";

import { assests } from "../../assets/assets";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LoginSignUp from "../LoginSignUp/LoginSignUp";

const NavBar = () => {
  const navigate = useNavigate();
  const [navLink, setNavLink] = useState("home");
  const [signUp, setSignUp] = useState(false);
  const toogleSignUp = () => {
    if (signUp) {
      setSignUp(false);
    } else {
      setSignUp(true);
    }
  };
  return (
    <div className="navbar">
      {signUp ? <LoginSignUp setSignUp={setSignUp} /> : <></>}
      <div className="logo">
        <img src={assests.logo} alt="" />
      </div>
      <div className="navbar-links">
        <li
          onClick={() => setNavLink("home", navigate("/"))}
          className={navLink === "home" ? "active" : ""}>
          Home
        </li>
        <li
          onClick={() => setNavLink("products")}
          className={navLink === "products" ? "active" : ""}
          href="#products">
          Products
        </li>
        <li
          onClick={() => setNavLink("mobile-app")}
          className={navLink === "mobile-app" ? "active" : ""}
          to=""
          href="#mobile-app">
          Mobile App
        </li>
        <li
          onClick={() => setNavLink("contact")}
          className={navLink === "contact" ? "active" : ""}
          href="#contact">
          Contact
        </li>
      </div>
      <div className="profile-signup">
        <div className="cart">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </div>
        <button onClick={() => toogleSignUp()}>Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
