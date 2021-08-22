import React, { useState } from "react";
import "../styles/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../images/logo.png'

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
           <img src={logo} alt="no"  style={{height:'5rem'}}/>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
             Services
            </li>
            <li>
             Contact
            </li>
            <li>
             Login/Signup
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color="black" />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Header;