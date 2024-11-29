import React, { useState } from "react";
import SVG1 from "./eye/eye.svg";
import SVG2 from "./eye/eyeball.svg";
import SVG3 from "./eye/eyeLash.svg";

import M from "./letters/M.svg";
import A from "./letters/A.svg";
import K from "./letters/K.svg";
import U from "./letters/U.svg";
import "./animatedEye.css";

const AnimEye = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="animatedContainer">
        <div className="letterAnim">
          <img src={M} className="letM" alt="M" />
          <img src={A} className="letA" alt="A" />

          <img src={K} className="letK" alt="K" />

          <img src={U} className="letU " alt="U" />
        </div>

        <div className="eyeContainer">
          <img src={SVG1} className="outer" alt="Outer Eye" />
          <img src={SVG2} className="eyeBall" alt="Eye Ball" />
          <div className="eyeLash" alt="Eye Lash">
            <img src={SVG3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimEye;
