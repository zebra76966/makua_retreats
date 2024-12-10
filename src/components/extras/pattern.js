import React from "react";
import Frog from "../motions/logo/frog/frog";

const Pattern = () => {
  return (
    <div className="pattern w-100" style={{ overflowX: "hidden" }}>
      <div className="d-flex" style={{ width: "100%", position: "relative" }}>
        <img src="./assets/reeds.svg" className="log1" />
        <Frog isPattern={true} />
        <img src="./assets/reeds.svg" className="log2" />
        <Frog delay={2000} isPattern={true} />
        <img src="./assets/reeds.svg" className="log3" />
        <Frog isPattern={true} />
        <img src="./assets/reeds.svg" className="log4" />
      </div>
    </div>
  );
};
export default Pattern;
