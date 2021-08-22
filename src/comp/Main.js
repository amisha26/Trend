import React from "react";
import img1 from "../images/main.svg";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Workout <br />A New Style!
            </h1>
            <p>Get what is best for you.</p>
            <a href="" className="btn">
              {" "}
              Explore Now &#8594;
            </a>
          </div>
          <div className="col-2">
            <img src={img1} alt="#" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Main;
