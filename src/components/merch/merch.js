import React, { useRef } from "react";
import MerchCard from "./merchCards";
import data from "./merch.json";

const Merch = () => {
  // Create a reference to the scrollable div
  const scrollRef = useRef(null);

  // Function to scroll the container left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500; // You can adjust this value for how much to scroll per click
      scrollRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end gap-2 mb-2">
        <button className="btn bg-secondary txtSecondary d-flex align-items-center justify-content-center" style={{ height: "50px", width: "50px", borderRadius: "100%" }} onClick={() => scroll(-1)}>
          <img src="./assets/chevron-left-solid.svg" height={20} />
        </button>

        <button className="btn bg-secondary txtSecondary d-flex align-items-center justify-content-center" style={{ height: "50px", width: "50px", borderRadius: "100%" }} onClick={() => scroll(1)}>
          <img src="./assets/chevron-right-solid.svg" height={20} />
        </button>
      </div>

      <div className="w-100 h-scroll slim-scroll" ref={scrollRef} style={{ scrollBehavior: "smooth" }}>
        {data.map((ini) => {
          return (
            <div className="h-element" key={ini.id}>
              <MerchCard item={ini} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Merch;
