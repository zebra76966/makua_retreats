import React, { useState, useRef, useEffect } from "react";
import "./itinarySection.css";
import { motion } from "framer-motion";

const ItinarySection = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prevActive) => (prevActive + 1 !== 7 ? prevActive + 1 : 0));
    }, 5000);
  };

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    // Scroll the container to the active image
    const container = containerRef.current;
    const activeImg = container?.querySelector(`.card-img.active`);
    if (activeImg && container) {
      const containerRect = container.getBoundingClientRect();
      const activeImgRect = activeImg.getBoundingClientRect();
      const offset = activeImgRect.top - containerRect.top - containerRect.height / 2 + activeImgRect.height / 2;

      container.scrollBy({
        top: offset,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <div className="row  w-100">
      <div className="col-lg-5">
        <div className="verticalCar no-scroll " ref={containerRef}>
          <img src="./assets/retreats/car5.png" className={`card-img ${active === 0 ? "active" : ""}`} />
          <img src="./assets/retreats/car6.png" className={`card-img ${active === 1 ? "active" : ""}`} />
          <img src="./assets/retreats/car4.png" className={`card-img ${active === 2 ? "active" : ""}`} />
          <img src="./assets/retreats/car3.png" className={`card-img ${active === 3 ? "active" : ""}`} />
          <img src="./assets/retreats/car2.png" className={`card-img ${active === 4 ? "active" : ""}`} />
          <img src="./assets/retreats/car1.png" className={`card-img ${active === 5 ? "active" : ""}`} />
          <img src="./assets/retreats/car6.png" className={`card-img ${active === 6 ? "active" : ""}`} />
        </div>
      </div>
      <div className="col-lg-7">
        <div className=" d-flex align-items-center" style={{ height: "80dvh" }}>
          <div className="w-100 text-center pb-5 mb-5 " style={{ height: "50dvh" }}>
            {active === 0 && (
              <motion.div className="py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <h4 className="display-1 fw-bold mt-0 pt-0"> SOME ACTIVITY</h4>
                <p className="lead quicks-font  fs-3 w-100 my-4"> Some Description goes here...</p>
              </motion.div>
            )}
            {active === 1 && (
              <motion.div className="py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <h4 className="display-1 fw-bold mt-0 pt-0"> OTHER ACTIVITY</h4>
                <p className="lead quicks-font  fs-3 w-100 my-4"> Some Description goes here...</p>
              </motion.div>
            )}
            {active === 2 && (
              <motion.div className="py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <h4 className="display-1 fw-bold mt-0 pt-0"> NEW ACTIVITY</h4>
                <p className="lead quicks-font  fs-3 w-100 my-4"> Some Description goes here...</p>
              </motion.div>
            )}
            {active === 3 && (
              <motion.div className="py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <h4 className="display-1 fw-bold mt-0 pt-0"> THIS ACTIVITY</h4>
                <p className="lead quicks-font  fs-3 w-100 my-4"> Some Description goes here...</p>
              </motion.div>
            )}
            {active === 4 && (
              <motion.div className="py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <h4 className="display-1 fw-bold mt-0 pt-0"> THAT ACTIVITY</h4>
                <p className="lead quicks-font  fs-3 w-100 my-4"> Some Description goes here...</p>
              </motion.div>
            )}
            {active === 5 && (
              <motion.div className="py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <h4 className="display-1 fw-bold mt-0 pt-0"> FIRST ACTIVITY</h4>
                <p className="lead quicks-font  fs-3 w-100 my-4"> Some Description goes here...</p>
              </motion.div>
            )}
            {active === 6 && (
              <motion.div className="py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <h4 className="display-1 fw-bold mt-0 pt-0"> LAST ACTIVITY</h4>
                <p className="lead quicks-font  fs-3 w-100 my-4"> Some Description goes here...</p>
              </motion.div>
            )}

            <div className="timeline w-100 mt-5">
              <div className="w-100 d-flex justify-content-around days">
                <div className={`timestamp text-center ${active == 0 ? "active" : ""}`}>
                  <h6 className="fs-5 my-0"> 9 AM </h6>
                  <div className="vLine"></div>
                </div>
                <div className={`timestamp text-center ${active == 1 ? "active" : ""}`}>
                  <h6 className="fs-5 my-0"> 11 AM </h6>
                  <div className="vLine"></div>
                </div>
                <div className={`timestamp text-center ${active == 2 ? "active" : ""}`}>
                  <h6 className="fs-5 my-0"> 1 PM </h6>
                  <div className="vLine"></div>
                </div>
                <div className={`timestamp text-center ${active == 3 ? "active" : ""}`}>
                  <h6 className="fs-5 my-0"> 3 PM </h6>
                  <div className="vLine"></div>
                </div>
                <div className={`timestamp text-center ${active == 4 ? "active" : ""}`}>
                  <h6 className="fs-5 my-0"> 5 PM </h6>
                  <div className="vLine"></div>
                </div>
                <div className={`timestamp text-center ${active == 5 ? "active" : ""}`}>
                  <h6 className="fs-5 my-0"> 7 PM </h6>
                  <div className="vLine"></div>
                </div>
                <div className={`timestamp text-center ${active == 6 ? "active" : ""}`}>
                  <h6 className="fs-5 my-0"> 9 PM </h6>
                  <div className="vLine"></div>
                </div>
              </div>

              <div className="w-100 d-flex align-items-center gap-2">
                <img src="./assets/sun.svg" className="spinner" height={40} />
                <div className="line w-100 "></div>

                <img src="./assets/moon-stars-thin.svg" className="zoomer" height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItinarySection;
