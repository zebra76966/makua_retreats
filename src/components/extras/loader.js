import React, { useEffect, useState, useRef } from "react";
import "./loader.css";

const Loader = ({ isOn, firstLoad }) => {
  return <div className={`loader-trans ${isOn ? "transUp" : firstLoad ? "transDown" : ""} `}></div>;
};

export default Loader;
