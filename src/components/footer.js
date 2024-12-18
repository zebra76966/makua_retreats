import React from "react";

const Footer = () => {
  return (
    <div className="footer-elem p-2 mt-5">
      <footer class=" p-md-4 inner bg-dark">
        <div class="row">
          <div class="col-2 fw-bold">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-primary">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-primary">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-primary">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-primary">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-primary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-9 text-end offset-1 my-auto" style={{ mixBlendMode: "screen", filter: " sepia(0.5)" }}>
            <img src="./assets/logo_horizontal.svg" className="footerLogo" height={100} style={{ filter: "invert(0.8)" }} />
          </div>
        </div>

        <div class=" py-4 my-4 border-top border-primary text-primary">
          <p className="fw-bold">© 2024 Company, Inc. All rights reserved.</p>

          <ul class="list-unstyled d-flex ">
            <li class="">
              <a class="link-light text-primary fs-3" href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-light text-primary fs-3" href="#">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-light text-primary fs-3" href="#">
                <i className="fa fa-linkedin-square" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
