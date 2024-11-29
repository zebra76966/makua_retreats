import React, { useState, useEffect } from "react";
import "./horizontalCar.css";

const HorizontalCar = () => {
  const [active, setActive] = useState(0);
  const images = [
    "./assets/retreats/car5.png",
    "./assets/retreats/car6.png",
    "./assets/retreats/car4.png",
    "./assets/retreats/car3.png",
    "./assets/retreats/car2.png",
    "./assets/retreats/car1.png",
    "./assets/retreats/car6.png",
    "./assets/retreats/car5.png",
    "./assets/retreats/car6.png",
    "./assets/retreats/car4.png",
    "./assets/retreats/car3.png",
    "./assets/retreats/car2.png",
    "./assets/retreats/car1.png",
    "./assets/retreats/car6.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hCar">
      {images.map((src, index) => (
        <img key={index} src={src} className={`heroImg ${active === index ? "active" : active > index ? "left" : "right"}`} />
      ))}
    </div>
  );
};

export default HorizontalCar;
