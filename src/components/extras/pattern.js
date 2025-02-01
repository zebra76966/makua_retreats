import React from "react";
import Frog from "../motions/logo/frog/frog";

const Pattern = ({ position }) => {
  return (
    <div className="pattern w-100" style={{ overflowX: "hidden" }}>
      {/* {position == "top" ? (
        <div className="d-flex" style={{ width: "100%", position: "relative" }}>
          <img src="./assets/reeds.svg" className="log1" style={{ height: "20dvh", left: "0%", bottom: "10%" }} />
          <Frog delay={3000} isPattern={true} />
          <img src="./assets/reeds.svg" className="log4" style={{ height: "20dvh", left: "70%", bottom: "20%" }} />
        </div>
      ) : (
        <div className="d-flex" style={{ width: "100%", position: "relative" }}>
          <img src="./assets/reeds.svg" className="log1" style={{ height: "20dvh", left: "-10%" }} />
          <Frog delay={3000} isPattern={true} />
          <img src="./assets/reeds.svg" className="log4" style={{ height: "20dvh", left: "50%" }} />
        </div>
      )} */}

      <div className="d-flex" style={{ width: "100%", position: "relative" }}>
        <img src="./assets/reeds.svg" className="log1" />
        <Frog delay={3000} isPattern={true} />
        <img src="./assets/reeds.svg" className="log2" />
        <Frog delay={4800} isPattern={true} />
        <img src="./assets/reeds.svg" className="log3" />

        <Frog isPattern={true} hide={true} />

        <img src="./assets/reeds.svg" className="log4" />
      </div>
    </div>
  );
};
export default Pattern;
