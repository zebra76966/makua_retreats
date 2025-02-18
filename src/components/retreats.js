import React, { useState, useEffect, act, useRef } from "react";
import cardsData from "./retreats.json";
import wooData from "./woo-retreats.json";
import axios from "axios";
import AnimEyeInfinte from "./motions/logo/animatedEyeInfinite";
import { motion } from "framer-motion";

const RetreatCards = ({ setActive }) => {
  const [active, setActive2] = useState(null);

  useEffect(() => {
    setActive(active);
  }, [active]);

  const [showFull, showFullDet] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const lineHeight = parseFloat(getComputedStyle(paragraphRef.current).lineHeight);
      const lines = paragraphRef.current.scrollHeight / lineHeight;
      setShowToggle(lines > 5); // Show toggle only if more than 5 lines
    }
  }, [active]);

  function serachsvg(name) {
    let index = cardsData.findIndex((find) => find.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    if (index !== -1) {
      return cardsData[index].icon;
    } else {
      return false;
    }
  }

  // Woo product fetch

  const [retreatProducts, setRetreatProducts] = useState([]);
  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
  const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;

  // Fetch products by category

  const fetchProductsByCategory = async (categoryId, setProducts) => {
    try {
      const response = await axios.get(`${baseURL}/products`, {
        params: {
          consumer_key: consumerKey,
          consumer_secret: consumerSecret,
          category: categoryId, // Replace with the category ID (e.g., 12)
          per_page: 20, // Adjust as needed
        },
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setProducts(response.data);
      console.log(response.data); // Should return products in the given category
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory(18, setRetreatProducts); // Replace "retreats" with your retreats category slug
  }, []);

  if (!wooData || wooData.length === 0) {
    return <p>No retreats available.</p>;
  }

  const HandleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={`row px-0 mx-0 position-relative mb-5 ${active !== null ? "retreatsRow" : ""}`} id="retreats">
      {retreatProducts.map((ini, i) => {
        const icon = serachsvg(ini.name);

        return (
          <div className={`col-lg-3 col-md-6 mb-4 mx-auto ${active !== null && "cardFadeout"}`} key={ini.id} onClick={() => setActive2(i)}>
            <div className="card w-100 txtSecondary card-retreats h-100">
              <div className="card-body">
                {/* <img src={icon ? icon : ini.images?.[0]?.src || "default-image.png"} height={80} alt={ini.name} /> */}
                <img src={ini.images?.[0]?.src} height={80} alt={ini.name} loading="lazy" style={{ borderRadius: "0.8em" }} />
                <h5 className="card-title fs-2 fw-bold">{ini.name}</h5>
                <div className="card-text h-25 mb-4 lineClamp" dangerouslySetInnerHTML={{ __html: ini.description || "" }} />

                <h6 className="card-title fs-3 fw-bold d-flex align-items-center gap-2">
                  <span className="fw-light fs-4"> From </span> <span className="border-2 border borderSecondary pricetag px-3 rounded-pill"> ${ini.price} </span>
                </h6>
              </div>
            </div>
          </div>
        );
      })}

      {console.log(retreatProducts[active])}
      {active !== null && (
        <div className="bgBox Retreats px-lg-2 px-3 px-md-4 py-5 shadow mx-0 borderSecondary border border-4 pricetag" style={{ top: 0 }}>
          <div className={`archCard Retreats shadow-lg  active`} onClick={() => setActive2(0)}>
            <img src={retreatProducts[active].images?.[0]?.src} style={{ borderRadius: "1em" }} />
          </div>

          <div className="txtContent txtSecondary">
            <motion.div className="py-lg-5 py-3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
              {/* <p className="lead py-0 my-0 fw-bold">THE</p> */}
              <h4 className="display-1 fw-bold mt-0 pt-0"> {retreatProducts[active].name}</h4>
            </motion.div>
            <div className={`lineClampRetreats ${showFull ? "" : "lineClamp"} `}>
              <motion.p
                ref={paragraphRef}
                className="quicks-font  fs-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                dangerouslySetInnerHTML={{ __html: retreatProducts[active].description || "" }}
              ></motion.p>
            </div>
            {retreatProducts[active].description.length > 200 && (
              <motion.span
                className="fw-bold fs-5 border border-1 borderSecondary p-2 rounded-pill px-3 d-inline-block mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                onClick={() => showFullDet(!showFull)}
                style={{ cursor: "pointer" }}
              >
                {" "}
                Show {showFull ? "Less" : "More"}{" "}
              </motion.span>
            )}

            <motion.div
              className="position-absolute top-0 end-0 m-lg-3 mt-lg-5 m-3 bg-dark p-4 rounded-pill"
              onClick={() => {
                showFullDet(false);
                setActive2(null);
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <AnimEyeInfinte isSecondary={true} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="bottomEye position-absolute m-3"
              onClick={() => HandleRedirect(retreatProducts[active].permalink)}
            >
              <button className="bg-secondary btn text-dark fw-bold me-2">More Information</button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetreatCards;
