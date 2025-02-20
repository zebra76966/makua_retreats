import React, { useEffect, useState } from "react";
import AnimEyeInfinte from "./motions/logo/animatedEyeInfinite";
import { motion } from "framer-motion";
import AnimEye from "./motions/logo/animatedEye";

const Navbar = ({ setLoadTrans, loadTrans, isSecondary, isTertary }) => {
  const [fullNav, setFullNav] = useState(false);
  const [active, setActive] = useState("Home");
  const [activeLink, setActiveLink] = useState("");

  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
  const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;

  useEffect(() => {
    if (loadTrans) {
      setTimeout(() => setFullNav(true), 1200);
    } else {
      setTimeout(() => setFullNav(false), 1200);
    }
  }, [loadTrans]);

  useEffect(() => {
    if (activeLink !== "") {
      setLoadTrans(!loadTrans);
      setTimeout(() => {
        const element = document.getElementById(activeLink);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // Reset activeLink after scroll
        setActiveLink("");
      }, 2000);
    }
  }, [activeLink]);

  return (
    <>
      <motion.nav
        className={`${
          isSecondary ? "bg-primary transitionSecondary" : isTertary ? "bg-primary transitionSecondary" : "bg-primary"
        } navbar navbar-expand-lg bg-none position-fixed top-0 start-0 w-100 px-lg-5 px-2 pt-4`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 6 }}
        style={{ zIndex: "99" }}
      >
        <div class="container-fluid px-lg-5 px-2">
          <button className="navbar-brand btn bg-none link p-0 m-0 noFocus" onClick={() => setLoadTrans(!loadTrans)}>
            {!fullNav ? <img src="./assets/bars-thin.svg" height={50} /> : <img src="./assets/xmark-light.svg" height={50} />}
          </button>

          <div class="vavBrand " id="navbarSupportedContent">
            <a class="navbar-brand2 ms-lg-auto me-lg-0  me-auto ms-auto  ps-lg-5 float" href="#">
              <img src="./assets/frog-outline.svg" className="ms-md-5 ps-md-5 mx-auto" height={50} />
            </a>

            <div class="d-flex ms-auto gap-2">
              <a href="#" className="btn  bg-dark text-primary bg-dark text-primary rounded-0 p-2 btn-lg">
                <AnimEyeInfinte />
              </a>
              <button
                className="btn btn-dark px-lg-5 px-2 bg-dark text-primary rounded-0 p-2 btn-lg"
                onClick={() => {
                  window.open("https://shop.makuaretreats.com/cart/", "_blank");
                }}
              >
                RESERVE
              </button>
              {/* <a href="mailto:contact@makuaretreats.com" className="btn btn-dark px-lg-5 px-2 bg-dark text-primary rounded-0 p-2 btn-lg">
                RESERVE
              </a> */}
            </div>
          </div>
        </div>
      </motion.nav>

      {fullNav && (
        <div
          className={`w-100 p-md-5 position-fixed d-flex align-items-center  ${isSecondary ? "bg-primary transitionSecondary" : isTertary ? "bg-primary transitionSecondary" : "bg-primary"}`}
          style={{ height: "100dvh", zIndex: 98 }}
        >
          <div class="container-fluid p-lg-5 p-2 d-lg-flex justify-content-between">
            <div class="navigation-menu-overlay ">
              <div class="menu-button" onMouseOver={() => setActive("Home")}>
                <span class="menu-text">Home</span>
                <span class="menu-text">Home</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("About")} onClick={() => setActiveLink("about")}>
                <span class="menu-text">About</span>
                <span class="menu-text">About</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("Menu")} onClick={() => setActiveLink("experience")}>
                <span class="menu-text">Experience</span>
                <span class="menu-text">Experience</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("Shop")} onClick={() => setActiveLink("Resort")}>
                <span class="menu-text">Resort</span>
                <span class="menu-text">Resort</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("Contact")} onClick={() => setActiveLink("booking")}>
                <span class="menu-text">Booking/Prices</span>
                <span class="menu-text">Booking/Prices</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("Faqs")} onClick={() => setActiveLink("faqs")}>
                <span class="menu-text">FAQs</span>
                <span class="menu-text">FAQs</span>
              </div>
            </div>

            {active == "Home" && (
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="./assets/frog-outline.svg"
                className="my-auto navImgs"
                style={{ height: "50dvh" }}
              />
            )}
            {active == "About" && (
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="./assets/f2.png"
                className="my-auto navImgs"
                style={{ height: "50dvh" }}
              />
            )}
            {active == "Menu" && (
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="./assets/f3.png"
                className="my-auto pe-5 "
                style={{ height: "50dvh" }}
              />
            )}
            {active == "Shop" && (
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="./assets/f1.png"
                className="my-auto navImgs"
                style={{ height: "50dvh" }}
              />
            )}
            {active == "Contact" || active == "Faqs" ? (
              <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 0.7, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} src="./assets/logo_horizontal.svg" className="my-auto w-50" />
            ) : (
              ""
            )}
          </div>

          <div className="position-fixed bottom-0 start-0 p-3 w-100 d-flex justify-content-start justify-content-lg-center" style={{ zIndex: "99" }}>
            <div className="d-md-flex gap-3">
              <a
                href="tel:+1 (774) 647-4263"
                class="d-flex gap-2 align-items-center nav-link p-0 text-dark border-dashed border-2 fw-bold fs-5  border-dark rounded-3 px-3 py-2"
                style={{ borderStyle: "dashed" }}
              >
                <img src="assets/telephone.svg" height={20} style={{ filter: "invert(1)" }} /> +1 (774) 647-4263
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
