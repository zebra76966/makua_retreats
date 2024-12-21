import React, { useEffect, useState } from "react";
import AnimEyeInfinte from "./motions/logo/animatedEyeInfinite";
import { useLenis } from "@studio-freight/react-lenis";

const Footer = () => {
  const [stopLenis, setStopLenis] = useState(false);
  const lenis = useLenis();
  useEffect(() => {
    if (stopLenis) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [stopLenis, lenis]);
  return (
    <>
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
                <li class="nav-item mb-2">
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="nav-link p-0 text-primary" style={{ cursor: "pointer" }} onClick={() => setStopLenis(true)}>
                    Cancellation Policy
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
                <a
                  class="link-light text-primary fs-3"
                  target="_blank"
                  href="https://www.google.com/maps/place/Cerro+Tusa+Springs/@5.9611186,-75.7554612,15z/data=!4m9!3m8!1s0x8e4661ba172d7a6b:0x9efaa753b676464d!5m2!4m1!1i2!8m2!3d5.9611186!4d-75.7554612!16s%2Fg%2F11p0z42xbz!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <i className="fa fa-map-marker" />
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
                style={{ borderStyle: "dashed", overflowWrap: "anywhere" }}
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

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: 999999999 }}>
        <div class="modal-dialog  modal-dialog-scrollable modal-lg">
          <div class="modal-content bg-primary">
            <div class="modal-header border-dark">
              <h5 class="modal-title" id="exampleModalLabel">
                Cancellation policy
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body quicks-font bg-primary slim-scroll">
              <div class="d-flex justify-content-center">
                <img src="./assets/logo_horizontal.svg" className="footerLogo mx-auto my-2" height={60} />
              </div>

              <h1 className="fs-3 fw-bold text-center my-5">Makua Retreats Cancellation Policy</h1>

              <ol>
                <li className="mb-3">
                  <h4 className="fs-5 fw-bold">Cancellation by Participants</h4>
                  <ul>
                    <li>More than 60 days before the retreat: Full refund minus a 10% administrative fee.</li>
                    <li>30–60 days before the retreat: 50% refund or option to transfer the payment to a future retreat.</li>
                    <li>Less than 30 days before the retreat: No refund, but participants may transfer their spot to another person approved by Makua.</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <h4 className="fs-5 fw-bold">Cancellation by Makua</h4>
                  <p>If the retreat is canceled by Makua due to unforeseen circumstances, participants receive a full refund or the option to transfer their payment to a future retreat.</p>
                </li>
                <li className="mb-3">
                  <h4 className="fs-5 fw-bold">Medical or Emergency Exceptions</h4>
                  <p>Participants who provide documented medical or emergency reasons may transfer their payment to a future retreat (case-by-case basis).</p>
                </li>
                <li className="mb-3">
                  <h4 className="fs-5 fw-bold">No-Show Policy</h4>
                  <p>Participants who do not show up for the retreat without prior notice will not receive a refund.</p>
                </li>
                <li className="mb-3">
                  <h4 className="fs-5 fw-bold">Payment Terms</h4>
                  <ul>
                    <li>A deposit of 30% is required to secure a spot and is non-refundable after 30 days.</li>
                    <li>Full payment is due 30 days before the retreat start date.</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div class="modal-footer border-dark">
              <button type="button" class="btn btn-dark text-primary fw-bold d-flex gap-2" data-bs-dismiss="modal" onClick={() => setStopLenis(false)}>
                <AnimEyeInfinte />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
