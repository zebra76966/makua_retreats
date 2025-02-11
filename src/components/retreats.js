import React, { useState, useEffect, act } from "react";
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
    <div className={`row px-0 mx-0 position-relative ${active !== null ? "retreatsRow" : ""}`} id="retreats">
      {retreatProducts.map((ini, i) => {
        const icon = serachsvg(ini.name);

        return (
          <div className={`col-lg-3 col-md-6 mb-4 mx-auto ${active !== null && "cardFadeout"}`} key={ini.id} onClick={() => setActive2(i)}>
            <div className="card w-100 txtSecondary card-retreats h-100">
              <div className="card-body">
                {/* <img src={icon ? icon : ini.images?.[0]?.src || "default-image.png"} height={80} alt={ini.name} /> */}
                <img src={ini.images?.[0]?.src} height={80} alt={ini.name} loading="lazy" />
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
        <div onClick={() => setActive2(null)} className="bgBox Retreats px-lg-2 px-3 px-md-4 py-5 shadow mx-0 borderSecondary border border-4 pricetag" style={{ top: 0 }}>
          <div className={`archCard Retreats shadow-lg  active`} onClick={() => setActive2(0)}>
            <img src={retreatProducts[active].images?.[0]?.src} />
          </div>

          <div className="txtContent txtSecondary">
            <motion.div className="col-lg-4 py-lg-5 py-3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
              {/* <p className="lead py-0 my-0 fw-bold">THE</p> */}
              <h4 className="display-1 fw-bold mt-0 pt-0"> {retreatProducts[active].name}</h4>
            </motion.div>

            <motion.p
              className="quicks-font  fs-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              dangerouslySetInnerHTML={{ __html: retreatProducts[active].description || "" }}
            ></motion.p>

            <div className="bottomEye position-absolute m-3" onClick={() => HandleRedirect(retreatProducts[active].permalink)}>
              {/* <AnimEyeInfinte isSecondary={true} /> */}

              <button className="bg-secondary btn text-dark fw-bold me-2">More Information</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetreatCards;
