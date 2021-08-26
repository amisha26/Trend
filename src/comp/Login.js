import React, { useState } from "react";
import img1 from "../images/image1.png";
import "../styles/Login.css";
import Header from './Header';

const Login = () => {
  const [whichForm, setWhichForm] = useState("login");

  const checkSignin = () => {
    setWhichForm("login");
  };

  const checkSignup = () => {
    setWhichForm("signup");
  };
  return (
    <div className="header">
      <Header />
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={img1} alt="#" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span onClick={checkSignin}>Sign-In</span>
                  <span onClick={checkSignup}>Sign-Up</span>
                </div>
                <form>
                  {whichForm === "login" ? (
                    <div>
                      <input type="text" placeholder="Username" />
                      <input type="password" placeholder="Password" />
                      <button type="submit" className="btn">
                        Sign-In
                      </button>
                    </div>
                  ) : (
                    <div>
                      <input type="text" placeholder="Name" />
                      <input type="text" placeholder="Username" />
                      <input type="password" placeholder="Password" />
                      <button type="submit" className="btn">
                        Sign-Up
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;