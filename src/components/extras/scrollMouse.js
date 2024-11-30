import React from "react";
import "./scrollMouse.css";

const ScrollMouse = () => {
  return (
    <div class="scrolldown" style={{ "--color": "#CFC3B4" }}>
      <div class="chevrons">
        <div class="chevrondown"></div>
        <div class="chevrondown"></div>
      </div>
    </div>
  );
};

export default ScrollMouse;
