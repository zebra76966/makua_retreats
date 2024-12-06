import React, { useEffect, useState, useRef } from "react";
import AnimEye from "./motions/logo/animatedEye";
import "./master.css";
import { easeIn, motion, spring } from "framer-motion";
import ScrollMouse from "./extras/scrollMouse";
import Carousel from "./carousel";
import ItinarySection from "./itinarySection";
import HorizontalCar from "./horizontalCar";
import Archetypes from "./archetypes";
import Merch from "./merch/merch";
import Gallery from "./gallery";

const Home = ({ setSecondary, setTertary }) => {
  const [loader, setLoader] = useState(true);
  const [isSecondary, setIsSecondary] = useState(false);
  const [isTertary, setIsTertary] = useState(false); // State for isTertary

  const archetypesRef = useRef(null);
  const merch = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoader(false), 6000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === archetypesRef.current) {
            setIsSecondary(entry.isIntersecting); // Toggle for isSecondary
          }
          if (entry.target === merch.current) {
            setIsTertary(entry.isIntersecting); // Toggle for isTertary
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed
    );

    const archetypesElement = archetypesRef.current;
    const merchElement = merch.current;

    if (archetypesElement) observer.observe(archetypesElement);
    if (merchElement) observer.observe(merchElement);

    // Cleanup observer
    return () => {
      if (archetypesElement) observer.unobserve(archetypesElement);
      if (merchElement) observer.unobserve(merchElement);
    };
  }, [loader]);

  useEffect(() => {
    setSecondary(isSecondary);
  }, [isSecondary]);
  useEffect(() => {
    setTertary(isTertary);
  }, [isTertary]);

  return (
    <>
      <div className={isSecondary ? "bg-primary transitionSecondary" : isTertary ? "bg-primary transitionTertary" : "bg-primary"}>
        <div className="w-100 d-flex align-items-center justify-content-center hero px-lg-5 px-2">
          {loader && (
            <div style={{ scale: "0.5" }} className="scaleOut">
              <AnimEye />

              <h6 className="display-4 quicks-font text-center expandText fadeIn">makua</h6>
            </div>
          )}

          {!loader && (
            <div className="w-100 px-lg-5 px-2">
              <div className="h-font d-flex align-items-end justify-content-center pb-4 position-relative">
                <div>
                  {/* <motion.h6 className=" mb-0  quicks-font text-center " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
                  MAKUA
                </motion.h6>
                <motion.h6 className=" mb-0  quicks-font text-center " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
                  RETREATS
                </motion.h6> */}
                  <motion.img
                    src="./assets/logo_horizontal.svg"
                    className="hero-logo"
                    height={150}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                </div>
              </div>

              <motion.div className="w-100  text-center  position-relative" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                {/* <div className="hcar">
                  <img src="hero3.png" className="heroImg" />
                </div> */}

                <HorizontalCar />

                <div className="position-absolute" style={{ bottom: 0, zIndex: "99", left: "50%", transform: "translate(-50%, -50%)" }}>
                  <ScrollMouse />
                </div>
              </motion.div>
            </div>
          )}
        </div>

        {!loader && (
          <div className="container-fluid p-5 text-dark mt-5 " id="about">
            <div className="row p-5 my-5">
              <motion.div className="col-lg-4 py-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
                <p className="lead py-0 my-0 fw-bold">ABOUT</p>
                <h4 className="display-1 fw-bold mt-0 pt-0"> MAKUA</h4>
              </motion.div>

              <div className="col-lg-8 py-5">
                <motion.p className="lead quicks-font fw-bold fs-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                  Makua is a journey back to our roots, set in the sacred landscapes of Cerro Tusa, Colombia. Honoring the earth as the "Mother of All," we offer a sanctuary for healing, blending
                  ancient wisdom and alternative therapies. Here, veterans, seekers, and all who come can break free from cycles of trauma and rediscover purpose, strength, and light within
                  themselves. Makua is more than a retreat; it’s a call to transformation.
                </motion.p>
              </div>
            </div>

            <div className="p-5 my-2">
              <Carousel />
            </div>

            <div className="p-5 my-2 d-none">
              <ItinarySection />
            </div>

            <div ref={archetypesRef} className="w-100 d-flex align-items-center justify-content-center mt-5 py-5 " style={{ height: "100dvh" }}>
              <div>
                <motion.div className="py-0" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                  <p className="lead py-0 my-0 fw-bold">THE</p>
                  <h4 className="display-2 my-0 mb-0 fw-bold"> ARCHETYPES</h4>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
                  <Archetypes />
                </motion.div>
              </div>
            </div>

            <div ref={merch} className="w-100 d-flex align-items-center justify-content-center  border-top border-dark" style={{ height: "100dvh" }}>
              <div className="d-flex justify-content-center " style={{ width: "10%" }}>
                <h4 className="display-1 fw-bold my-0 py-0 txtSecondary" style={{ transform: "rotate(-90deg)" }}>
                  MERCHANDISE
                </h4>
              </div>
              <div style={{ width: "90%" }}>
                <Merch />
              </div>
            </div>

            <div className="w-100 d-flex align-items-center justify-content-center  border-top border-dark" style={{ height: "100dvh" }}>
              <div className="w-100 ">
                <h4 className="display-1 fw-bold mt-0 pt-0 text-center"> GALLERY</h4>
                <Gallery />
              </div>
            </div>

            <div className="w-100 d-flex align-items-center justify-content-center  border-top border-dark" style={{ height: "100dvh" }}>
              <h4 className="display-1 fw-bold mt-0 pt-0"> ADDITONAL INFO/EXTRAS</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
