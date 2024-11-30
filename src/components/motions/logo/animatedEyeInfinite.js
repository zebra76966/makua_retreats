import React, { useState } from "react";
import SVG1 from "./eye/eyePrimaryColor.svg";
import SVG2 from "./eye/eyeballPrimaryColor.svg";
import SVG3 from "./eye/eyeLashPrimaryColor.svg";

import SVG4 from "./eye/eyeSecondaryColor.svg";
import SVG5 from "./eye/eyeballSecondaryColor.svg";
import SVG6 from "./eye/eyeLashSecondaryColor.svg";

import "./animatedEye.css";

const AnimEyeInfinte = ({ isSecondary }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="eyeContainerInfinite">
        <img src={isSecondary ? SVG4 : SVG1} className="outer" alt="Outer Eye" />
        <img src={isSecondary ? SVG5 : SVG2} className="eyeBall" alt="Eye Ball" />
        <div className="eyeLash" alt="Eye Lash">
          <img src={isSecondary ? SVG6 : SVG3} />
        </div>
      </div>
    </>
  );
};

export default AnimEyeInfinte;
