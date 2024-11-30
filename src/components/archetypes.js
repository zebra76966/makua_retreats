import React, { useState } from "react";
import { motion } from "framer-motion";
import "./archetypes.css";
import AnimEyeInfinte from "./motions/logo/animatedEyeInfinite";
const Archetypes = () => {
  const archetypes = [
    {
      id: 1,
      name: "HERO",
      about:
        "Symbolizes bravery, the struggle for triumph and personal sacrifice. The Hero is one who faces difficult challenges and persists despite adversity. He or she is usually driven by the desire to protect others or achieve a greater goal. This archetype represents the overcoming of internal and external fears, seeking self-realization through victory or achievement.",
    },
    {
      id: 2,
      name: "EXPLORER",
      about:
        "It embodies the desire for adventure, freedom and discovery. This archetype constantly seeks new experiences, knowledge and spaces where he has not been before. His greatest fear is routine or confinement, which drives him out of his comfort zone. The Explorer is independent and willing to take risks in order to expand his horizons. He is not so much looking for success or victory, but for experience and self-discovery.",
    },
    {
      id: 3,
      name: "REBEL",
      about:
        "feels a deep need for change and transformation in his environment, and is not afraid to challenge the status quo. This archetype can be both destructive and reforming, depending on his motivations. He seeks to break structures and create something new, even if this involves conflict. Independence and authenticity are key for the Rebel, who resists being controlled or constrained by rules.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className={`archCardBox d-flex align-items-center justify-content-between position-relative gap-3 ${active ? "active" : ""}`}>
      <div className={`archCard shadow-lg ${active == 0 ? "active" : active !== null ? "fadeOut" : ""}`} onClick={() => setActive(0)}>
        <img src="./assets/archetypes/hero.png" />
      </div>
      <div className={`archCard shadow-lg ${active == 1 ? "active" : active !== null ? "fadeOut" : ""}`} onClick={() => setActive(1)}>
        <img src="./assets/archetypes/explorer.png" />
      </div>
      <div className={`archCard shadow-lg ${active == 2 ? "active" : active !== null ? "fadeOut" : ""}`} onClick={() => setActive(2)}>
        <img src="./assets/archetypes/rebel.png" />
      </div>

      {active !== null && (
        <div onClick={() => setActive(null)} className="bgBox px-2 py-5 shadow mx-0">
          <div className="txtContent txtSecondary">
            <motion.div className="col-lg-4 py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.5 }}>
              <p className="lead py-0 my-0 fw-bold">THE</p>
              <h4 className="display-1 fw-bold mt-0 pt-0"> {archetypes[active].name}</h4>
            </motion.div>

            <motion.p className="quicks-font  fs-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 3 }}>
              {archetypes[active].about}
            </motion.p>

            <div className="bottomEye position-absolute m-3">
              <AnimEyeInfinte isSecondary={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archetypes;
