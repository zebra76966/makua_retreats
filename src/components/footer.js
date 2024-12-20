import React from "react";

const Footer = () => {
  return (
    <div className="footer-elem p-2 mt-5">
      <footer class=" p-md-4 p-3 inner bg-dark">
        <div class="row">
          <div class="col-md-2 fw-bold">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-primary">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#about" class="nav-link p-0 text-primary">
                  About
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#experience" class="nav-link p-0 text-primary">
                  Experience
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#Resort" class="nav-link p-0 text-primary">
                  Resort
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#booking" class="nav-link p-0 text-primary">
                  Booking/Prices
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#faqs" class="nav-link p-0 text-primary">
                  Faqs
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-9 text-lg-end text-start offset-lg-1 py-lg-0 py-3 my-auto" style={{ mixBlendMode: "screen", filter: " sepia(0.5)" }}>
            <img src="./assets/logo_horizontal.svg" className="footerLogo" height={100} style={{ filter: "invert(0.8)" }} />
          </div>
        </div>

        <div class=" py-4 my-4 border-top border-primary text-primary">
          <p className="fw-bold">© 2024 Makua Retreats. All rights reserved.</p>

          <ul class="list-unstyled d-flex ">
            <li class="">
              <a class="link-light text-primary fs-3" target="_blank" href="https://www.instagram.com/makuaretreats">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-light text-primary fs-3" target="_blank" href="https://www.facebook.com/profile.php?id=61568316370249&mibextid=ZbWKwL">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-light text-primary fs-3" href="#">
                <i className="fa fa-linkedin-square" />
              </a>
            </li>
          </ul>
          <div className="d-md-flex gap-3">
            <a
              href="mailto:contact@makuaretreats.com"
              class="d-flex gap-2 align-items-center nav-link p-0 text-primary border-dashed border-2 fw-bold fs-5  border-primary rounded-3 px-3 py-2"
              style={{ borderStyle: "dashed" }}
            >
              <img src="assets/envelope.svg" height={20} /> contact@makuaretreats.com
            </a>

            <a
              href="tel:+1 (774) 647-4263"
              class="d-flex gap-2 align-items-center nav-link p-0 text-primary border-dashed border-2 fw-bold fs-5  border-primary rounded-3 px-3 py-2"
              style={{ borderStyle: "dashed" }}
            >
              <img src="assets/clock.svg" height={20} /> 09:00am — 05:00pm
            </a>
            <a
              href="tel:+1 (774) 647-4263"
              class="d-flex gap-2 align-items-center nav-link p-0 text-primary border-dashed border-2 fw-bold fs-5  border-primary rounded-3 px-3 py-2"
              style={{ borderStyle: "dashed" }}
            >
              <img src="assets/telephone.svg" height={20} /> +1 (774) 647-4263
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
