import React from "react";
import img1 from "../images/main.svg";
import load from "../images/loader.gif";

const Main = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Workout <br />A New Style!
            </h1>
            <p>Get what is best for you.</p>
            <a href="" className="btn">
              Explore Now
            </a>
          </div>
          <div className="col-2">
            <img src={img1} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
