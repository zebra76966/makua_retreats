import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./carousel.css";
import Frog from "./motions/logo/frog/frog";
const Carousel = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null); // Reference to store the interval

  const startInterval = () => {
    // Clear any existing interval before starting a new one
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prevActive) => (prevActive + 1 !== 5 ? prevActive + 1 : 0));
    }, 5000);
  };

  const handleButtonClick = (newActive) => {
    clearInterval(intervalRef.current); // Clear the interval
    setActive(newActive); // Set the new active value
    startInterval(); // Restart the interval
  };

  useEffect(() => {
    startInterval(); // Start the interval when the component mounts

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div className="row mt-5 pt-5 w-100 position-relative" style={{ height: "80dvh" }}>
      <div className="col-lg-4">
        <div className="carousel-custom w-100">
          <motion.div className="py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
            <p className="lead py-0 my-0 fw-bold">WHY</p>
            <h4 className="display-1 fw-bold mt-0 pt-0"> MAKUA?</h4>

            <div style={{ height: "5vw" }}>
              {active == 0 && (
                <motion.p className="lead quicks-font  fs-1 w-100 my-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                  A Sacred Journey to Cerro Tusa
                </motion.p>
              )}
              {active == 1 && (
                <motion.p className="lead quicks-font  fs-1 w-100 my-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                  Reconnect with the Wild and Wise Within
                </motion.p>
              )}
              {active == 2 && (
                <motion.p className="lead quicks-font  fs-1 w-100 my-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                  Honoring the Earth, Healing the Self
                </motion.p>
              )}
              {active == 3 && (
                <motion.p className="lead quicks-font  fs-1 w-100 my-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                  Breaking Free from Trauma
                </motion.p>
              )}
              {active == 4 && (
                <motion.p className="lead quicks-font  fs-1 w-100 my-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                  More Than a Retreat – A Call to Transformation
                </motion.p>
              )}
            </div>
            <div className="d-flex gap-2 mt-5 pt-5">
              <button className="btn rounded-circle bg-none border-2 border-dark p-3 carButton noFocus" onClick={() => handleButtonClick(active - 1 !== -1 ? active - 1 : 4)}>
                <img src="./assets/arrow-left.svg" height={30} />
              </button>
              <button className="btn rounded-circle bg-none border-2 border-dark p-3 carButton noFocus" onClick={() => handleButtonClick(active + 1 !== 5 ? active + 1 : 0)}>
                <img src="./assets/arrow-right.svg" height={30} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div className="col-lg-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
        <div className="cards ">
          <img src="./assets/retreats/car5.png" className={`card-img ${active == 1 && "inactive"}  ${active == 0 && "active"}  `} />
          <img src="./assets/retreats/car6.png" className={`card-img  ${active == 2 && "inactive"}  ${active == 1 && "active"} `} />
          <img src="./assets/retreats/car4.png" className={`card-img  ${active == 3 && "inactive"}  ${active == 2 && "active"} `} />
          <img src="./assets/retreats/car3.png" className={`card-img  ${active == 4 && "inactive"}  ${active == 3 && "active"} `} />
          <img src="./assets/retreats/car1.png" className={`card-img  ${active == 0 && "inactive"}  ${active == 4 && "active"} `} />
        </div>
      </motion.div>

      <div className="frog-jump-down d-flex">
        <Frog isPattern={true} />
      </div>
    </div>
  );
};

export default Carousel;
