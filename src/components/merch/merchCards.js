import React from "react";
import "./merch.css";

const MerchCard = ({ item }) => {
  return (
    <div className="w-100 merchCard shadow">
      <img src={item.thumb} />

      <h5 className="fs-4 name txtSecondary">#{item.name}</h5>

      <button className="bag btn border-0">
        <img src="./assets/bag.svg" />
      </button>

      <h5 className="fs-4 price fw-bold ">${item.price}.00</h5>

      <button className="buy-now btn btn-lg  txtSecondary">Buy Now</button>
    </div>
  );
};

export default MerchCard;
