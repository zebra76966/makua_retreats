import React, { useEffect, useState } from "react";
import AnimEyeInfinte from "./motions/logo/animatedEyeInfinite";
import { motion } from "framer-motion";
import AnimEye from "./motions/logo/animatedEye";

const Navbar = ({ setLoadTrans, loadTrans, isSecondary }) => {
  const [fullNav, setFullNav] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    if (loadTrans) {
      setTimeout(() => setFullNav(true), 1200);
    } else {
      setTimeout(() => setFullNav(false), 1200);
    }
  }, [loadTrans]);

  return (
    <>
      <motion.nav
        class={`navbar navbar-expand-lg bg-none position-fixed top-0 start-0 w-100 px-lg-5 px-2 pt-4 ${isSecondary ? "bg-primary transitionSecondary" : "bg-primary"}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 6 }}
        style={{ zIndex: "99" }}
      >
        <div class="container-fluid px-lg-5 px-2">
          <button className="navbar-brand btn bg-none link p-0 m-0 noFocus" onClick={() => setLoadTrans(!loadTrans)}>
            {!fullNav ? <img src="./assets/bars-thin.svg" height={50} /> : <img src="./assets/xmark-light.svg" height={50} />}
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <a class="navbar-brand2 ms-auto ps-5 float" href="#">
              <img src="./assets/frog-outline.svg" className="ms-5 ps-5" height={50} />
            </a>

            <div class="d-flex ms-auto gap-2">
              <button className="btn  bg-dark text-primary bg-dark text-primary rounded-0 p-2 btn-lg">
                <AnimEyeInfinte />
              </button>
              <button className="btn btn-dark px-5 bg-dark text-primary rounded-0 p-2 btn-lg">RESERVE</button>
            </div>
          </div>
        </div>
      </motion.nav>

      {fullNav && (
        <div className={`w-100 p-md-5 position-fixed  ${isSecondary ? "bg-primary transitionSecondary" : "bg-primary"}`} style={{ height: "100dvh", zIndex: 98 }}>
          <div class="container-fluid p-lg-5 p-2 d-lg-flex justify-content-between">
            <div class="navigation-menu-overlay ">
              <div class="menu-button" onMouseOver={() => setActive("Home")}>
                <span class="menu-text">Home</span>
                <span class="menu-text">Home</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("About")}>
                <span class="menu-text">About</span>
                <span class="menu-text">About</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("Menu")}>
                <span class="menu-text">Menu</span>
                <span class="menu-text">Menu</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("Shop")}>
                <span class="menu-text">Shop</span>
                <span class="menu-text">Shop</span>
              </div>
              <div class="menu-button" onMouseOver={() => setActive("Contact")}>
                <span class="menu-text">Contact</span>
                <span class="menu-text">Contact</span>
              </div>
            </div>

            {active == "Home" && (
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="./assets/frog-outline.svg"
                className="my-auto"
                style={{ height: "50dvh" }}
              />
            )}
            {active == "About" && (
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="./assets/f2.png"
                className="my-auto"
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
                className="my-auto"
                style={{ height: "50dvh" }}
              />
            )}
            {active == "Contact" && (
              <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 0.7, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} src="./assets/logo_horizontal.svg" className="my-auto w-50" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
