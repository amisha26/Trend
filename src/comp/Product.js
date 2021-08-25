import React from "react";
import { AiFillStar } from "react-icons/ai";
import cat1 from "../images/category-1.jpg";
import cat2 from "../images/category-2.jpg";
import cat3 from "../images/category-3.jpg";
import pro1 from "../images/product-1.jpg";
import pro2 from "../images/product-2.jpg";
import pro3 from "../images/product-3.jpg";
import pro4 from "../images/product-4.jpg";
import pro5 from "../images/product-5.jpg";
import pro6 from "../images/product-6.jpg";
import pro7 from "../images/product-7.jpg";
import pro8 from "../images/product-8.jpg";
import pro9 from "../images/product-9.jpg";
import pro10 from "../images/product-10.jpg";
import pro11 from "../images/product-11.jpg";
import pro12 from "../images/product-12.jpg";
import exclu from "../images/exclusive.png";
import Brand from "./Brand";

const prod = [
  {
    name: "Red Printed T-shirt",
    src: pro1,
    price: "$50",
    rating: "3.5",
  },
  {
    name: "Red Printed T-shirt",
    src: pro2,
    price: "$50",
    rating: "4",
  },
  {
    name: "Red Printed T-shirt",
    src: pro3,
    price: "$50",
    rating: "3.5",
  },
  {
    name: "Red Printed T-shirt",
    src: pro4,
    price: "$50",
    rating: "4",
  },
];

const prodlatest = [
  {
    name: "Red Printed T-shirt",
    src: pro5,
    price: "$50",
    rating: "2.5",
  },
  {
    name: "Red Printed T-shirt",
    src: pro6,
    price: "$50",
    rating: "3",
  },
  {
    name: "Red Printed T-shirt",
    src: pro7,
    price: "$50",
    rating: "4",
  },
  {
    name: "Red Printed T-shirt",
    src: pro8,
    price: "$50",
    rating: "3.5",
  },
  {
    name: "Red Printed T-shirt",
    src: pro9,
    price: "$50",
    rating: "4.5",
  },
  {
    name: "Red Printed T-shirt",
    src: pro10,
    price: "$50",
    rating: "4",
  },
  {
    name: "Red Printed T-shirt",
    src: pro11,
    price: "$50",
    rating: "3",
  },
  {
    name: "Red Printed T-shirt",
    src: pro12,
    price: "$50",
    rating: "4.5",
  },
];

const Product = () => {
  return (
    <div>
      {/*********** Feature Categories ********/}
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
      {/*********** Feature Products ********/}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {prod.map((x) => (
            <div className="col-4">
              <img src={x.src} alt="#" />
              <h3>{x.name}</h3>
              {/* <span>{x.rating} <AiFillStar/> </span> */}
              <p>{x.price}</p>
              <a href="" className="btn">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
      {/*********** Feature Products ********/}
      <div className="small-container">
        <h2 className="title">Latest Products</h2>
        <div className="row">
          {prodlatest.map((x) => (
            <div className="col-4">
              <img src={x.src} alt="#" />
              <h3>{x.name}</h3>
              {/* <span>{x.rating} <AiFillStar/> </span> */}
              <p>{x.price}</p>
              <a href="" className="btn">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
      {/*********** Offer ********/}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={exclu} alt="#" className="offer-img" />
            </div>
            <div className="col-2">
              <p> Exclusively Available on Trend</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                Amolded color full-touched display.
              </small>
              <a href="" className="btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/********** brand list **********/}
      <Brand />
    </div>
  );
};

export default Product;
