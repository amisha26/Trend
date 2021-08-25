import React from "react";
import logo1 from "../images/logo-godrej.png";
import logo2 from "../images/logo-coca-cola.png";
import logo3 from "../images/logo-oppo.png";
import logo4 from "../images/logo-paypal.png";
import logo5 from "../images/logo-philips.png";

const Brand = () => {
  return (
    <>
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src={logo1} alt="#" />
            </div>
            <div className="col-5">
              <img src={logo2} alt="#" />
            </div>
            <div className="col-5">
              <img src={logo3} alt="#" />
            </div>
            <div className="col-5">
              <img src={logo4} alt="#" />
            </div>
            <div className="col-5">
              <img src={logo5} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
