import React, { useRef, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const Gallery = () => {
  const scrollContainerRef = useRef(null);
  const lenis = useLenis();

  // Create a reference to the scrollable div

  // Function to scroll the container left or right
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500; // You can adjust this value for how much to scroll per click
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  // Increase this factor for faster horizontal scrolling
  const SCROLL_SPEED_FACTOR = 6;

  // useEffect(() => {
  //   const container = scrollContainerRef.current;
  //   let isInView = false;

  //   const handleWheel = (event) => {
  //     // If the container is not in view, let vertical scroll be normal
  //     if (!container || !isInView) {
  //       lenis.start();
  //       return;
  //     }

  //     const isAtStartOfHorizontalScroll = container.scrollLeft <= 0;
  //     const isAtEndOfHorizontalScroll = container.scrollLeft + container.offsetWidth >= container.scrollWidth;

  //     // Trigger horizontal scrolling when appropriate
  //     if (
  //       (event.deltaY > 0 && !isAtEndOfHorizontalScroll) || // Scroll right
  //       (event.deltaY < 0 && !isAtStartOfHorizontalScroll) // Scroll left
  //     ) {
  //       lenis.stop(); // Stop vertical scrolling temporarily
  //       container.scrollBy({
  //         left: event.deltaY * SCROLL_SPEED_FACTOR,
  //         behavior: "auto", // Remove Lenis' smooth effect here
  //       });
  //       event.preventDefault(); // Prevent default vertical scrolling
  //     } else {
  //       lenis.start(); // Resume Lenis' vertical scrolling
  //     }
  //   };

  //   // Intersection Observer to detect when the container is in view
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       isInView = entry.isIntersecting;
  //     },
  //     { threshold: 0.95 } // Trigger when at least 95% of the container is visible
  //   );

  //   if (container) {
  //     observer.observe(container);
  //   }

  //   // Add global wheel listener
  //   window.addEventListener("wheel", handleWheel, { passive: false });

  //   return () => {
  //     if (container) {
  //       observer.unobserve(container);
  //     }
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [lenis]);

  return (
    <>
      <div className="d-lg-flex d-none align-items-center justify-content-end gap-2 mb-2">
        <button
          className="btn bg-primary border-dark txtSecondary d-flex align-items-center justify-content-center"
          style={{ height: "50px", width: "50px", borderRadius: "100%" }}
          onClick={() => scroll(-1)}
        >
          <img src="./assets/chevron-left-solid.svg" height={20} />
        </button>

        <button
          className="btn bg-primary border-dark txtSecondary d-flex align-items-center justify-content-center"
          style={{ height: "50px", width: "50px", borderRadius: "100%" }}
          onClick={() => scroll(1)}
        >
          <img src="./assets/chevron-right-solid.svg" height={20} />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="gallery-container w-100 d-flex align-items-center slim-scroll2"
        style={{
          overflowX: "scroll",
          overflowY: "hidden", // Block vertical scrolling
          whiteSpace: "nowrap",
          height: "70dvh",
          scrollBehavior: "smooth",
        }}
      >
        <div className="image-group">
          <div className="d-flex align-items-center">
            <img src="./assets/retreats/car1.png" loading="lazy" className="gal-image-half" />
            <img src="./assets/retreats/car2.png" loading="lazy" className="gal-image-half" />
          </div>
          <div className="d-flex align-items-center">
            <img src="./assets/retreats/car3.png" loading="lazy" className="gal-image-half" />
            <img src="./assets/retreats/car4.png" loading="lazy" className="gal-image-half" />
          </div>
        </div>
        {/* ----- */}
        <div className="image-single">
          <img src="./assets/retreats/car5.png" loading="lazy" className="gal-image-full" />
        </div>
        <div className="image-single">
          <img src="./assets/retreats/car10.png" loading="lazy" className="gal-image-full" />
        </div>
        <div className="image-group">
          <div className="d-flex align-items-center">
            <img src="./assets/retreats/car6.png" loading="lazy" className="gal-image-half" />
            <img src="./assets/retreats/car7.png" loading="lazy" className="gal-image-half" />
          </div>
          <div className="d-flex align-items-center">
            <img src="./assets/retreats/car8.png" loading="lazy" className="gal-image-half" />
            <img src="./assets/retreats/car9.png" loading="lazy" className="gal-image-half" />
          </div>
        </div>
        {/* ----- */}
        <div className="image-single">
          <img src="./assets/retreats/car11.png" loading="lazy" className="gal-image-full" />
        </div>
        <div className="image-single">
          <img src="./assets/retreats/car12.png" loading="lazy" className="gal-image-full" />
        </div>
        <div className="image-group">
          <div className="d-flex align-items-center">
            <img src="./assets/retreats/car13.png" loading="lazy" className="gal-image-half" />
            <img src="./assets/retreats/car14.png" loading="lazy" className="gal-image-half" />
          </div>
          <div className="d-flex align-items-center">
            <img src="./assets/retreats/car15.png" loading="lazy" className="gal-image-half" />
            <img src="./assets/retreats/car16.png" loading="lazy" className="gal-image-half" />
          </div>
        </div>
        {/* ----- */}
        <div className="image-single">
          <img src="./assets/retreats/car17.png" loading="lazy" className="gal-image-full" />
        </div>
        <div className="image-single">
          <img src="./assets/retreats/car18.png" loading="lazy" className="gal-image-full" />
        </div>
        <div className="image-group">
          <div className="d-flex align-items-center">
            <img src="./assets/retreats/car19.png" loading="lazy" className="gal-image-half" />
            <img src="./assets/retreats/car20.png" loading="lazy" className="gal-image-half" />
          </div>
          <div className="d-flex align-items-center">
            <img src="./assets/retreats/car21.png" loading="lazy" className="gal-image-half" />
            <img src="./assets/retreats/car22.png" loading="lazy" className="gal-image-half" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
