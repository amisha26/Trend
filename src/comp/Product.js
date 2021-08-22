import React from "react";
import cat1 from "../images/category-1.jpg";
import cat2 from "../images/category-2.jpg";
import cat3 from "../images/category-3.jpg";


const Product = () => {
  return (
    <>
      {/*********** feature categories ********/}
      <div className="small-container">
        <div className="categories">
          <div className="row">
            <div className="col-3">
              <img src={cat1} />
            </div>
            <div className="col-3">
              <img src={cat2} />
            </div>
            <div className="col-3">
              <img src={cat3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
