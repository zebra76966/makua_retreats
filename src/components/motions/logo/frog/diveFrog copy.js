import React, { useEffect, useState } from "react";
import "./diveFrog.css";

const DiveFrog = ({ delay = 0, isPattern = true, isClicked }) => {
  const [active, setActive] = useState(isPattern ? 0 : 1);
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
              return (prevActive + 1) % 14; // Loop back to 0 in pattern mode
            } else if (prevActive + 1 === 14) {
              clearInterval(intervalId); // Stop in single-run mode
              setIsRunning(false); // Reset running state
              return prevActive; // Stop at 24
            }
            return prevActive + 1; // Increment frame
          });
        }, 100); // Regular frame interval
      }, delay);
    }

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, [isPattern, isClicked, delay]);

  useEffect(() => {
    setActive(1);
  }, [isClicked]);

  return (
    <div className="divefrog-container">
      <img src="./assets/frog/0A.svg" className={`${active === 0 ? "active" : ""}`} alt="Frog Frame 1" />
      <img src="./assets/frog/0B.svg" className={`${active === 1 ? "active" : ""}`} alt="Frog Frame 2" />
      <img src="./assets/frog/0C.svg" className={`${active === 2 ? "active" : ""}`} alt="Frog Frame 3" />
      <img src="./assets/frog/0D.svg" className={`${active === 3 ? "active" : ""}`} alt="Frog Frame 4" />
      {[...Array(10)].map((_, i) => (
        <img key={i} src={`./assets/frog/${i + 1}.svg`} className={`${active === i + 4 ? "active" : ""}`} alt={`Dive Frog Frame ${i + 5}`} />
      ))}
    </div>
  );
};

export default DiveFrog;
