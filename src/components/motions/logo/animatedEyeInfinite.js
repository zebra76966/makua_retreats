import React, { useState } from "react";
import SVG1 from "./eye/eyePrimaryColor.svg";
import SVG2 from "./eye/eyeballPrimaryColor.svg";
import SVG3 from "./eye/eyeLashPrimaryColor.svg";

import "./animatedEye.css";

const AnimEyeInfinte = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="eyeContainerInfinite">
        <img src={SVG1} className="outer" alt="Outer Eye" />
        <img src={SVG2} className="eyeBall" alt="Eye Ball" />
        <div className="eyeLash" alt="Eye Lash">
          <img src={SVG3} />
        </div>
      </div>
    </>
  );
};

export default AnimEyeInfinte;
