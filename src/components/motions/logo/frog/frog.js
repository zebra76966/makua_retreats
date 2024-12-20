import React, { useEffect, useState } from "react";
import "./frog.css";

const Frog = ({ delay = 0, isPattern = true, isClicked, hide }) => {
  const [active, setActive] = useState(isPattern ? 0 : 12);
  const [isRunning, setIsRunning] = useState(isPattern); // Tracks whether the animation should run

  useEffect(() => {
    let intervalId;
    let initialTimeout;

    if (isPattern || (!isPattern && isClicked)) {
      // Start animation if in pattern mode or single-run mode when clicked
      setIsRunning(true);

      // Add initial delay if provided
      initialTimeout = setTimeout(() => {
        intervalId = setInterval(() => {
          setActive((prevActive) => {
            if (isPattern) {
              return (prevActive + 1) % 24; // Loop back to 0 in pattern mode
            } else if (prevActive + 1 === 24) {
              clearInterval(intervalId); // Stop in single-run mode
              setIsRunning(false); // Reset running state
              return prevActive; // Stop at 24
            }
            return prevActive + 1; // Increment frame
          });
        }, 80); // Regular frame interval
      }, delay);
    }

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, [isPattern, isClicked, delay]);

  useEffect(() => {
    setActive(12);
  }, [isClicked]);

  return (
    <div className={`frog-container  ${hide ? "d-xxl-block d-none" : ""} `}>
      <img src="./assets/vfrog/0A.svg" className={`${active === 0 ? "active" : ""}`} alt="Frog Frame 1" />
      <img src="./assets/vfrog/0B.svg" className={`${active === 1 ? "active" : ""}`} alt="Frog Frame 2" />
      {[...Array(22)].map((_, i) => (
        <img key={i} src={`./assets/vfrog/${i + 1}.svg`} className={`${active === i + 2 ? "active" : ""}`} alt={`Frog Frame ${i + 2}`} />
      ))}
    </div>
  );
};

export default Frog;
