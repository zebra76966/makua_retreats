import React from "react";
import "./merch.css";

const MerchCard = ({ item }) => {
  const HandleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-100 merchCard shadow">
      <img loading="eager" src={item.images[0].src} />

      <h5 className="fs-4 name txtSecondary">#{item.name}</h5>

      {/* <button className="bag btn border-0">
        <img src="./assets/bag.svg" />
      </button> */}

      <h5 className="fs-4 price fw-bold ">${item.price}.00</h5>

      <button className="buy-now btn btn-lg  txtSecondary" onClick={() => HandleRedirect(item.permalink)}>
        Buy Now
      </button>
    </div>
  );
};

export default MerchCard;
