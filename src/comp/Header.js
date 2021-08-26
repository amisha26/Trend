import React, { useState } from "react";
import "../styles/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h2>
            <Link to="/">
              <img src={logo} alt="no" style={{ height: "5rem" }} />
            </Link>
          </h2>
        </div>

        {/* 2nd menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link>
              <li>Product</li>
            </Link>

            <Link>
              <li>Offer</li>
            </Link>

            <Link>
              <li>Contact</li>
            </Link>

            <Link to="/login">
              <li>Login/Signup</li>
            </Link>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color="black" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
