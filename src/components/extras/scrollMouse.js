import React from "react";
import "./scrollMouse.css";

const ScrollMouse = () => {
  return (
    <div class="scrolldown" style={{ "--color": "#e7daca" }}>
      <div class="chevrons">
        <div class="chevrondown"></div>
        <div class="chevrondown"></div>
      </div>
    </div>
  );
};

export default ScrollMouse;
