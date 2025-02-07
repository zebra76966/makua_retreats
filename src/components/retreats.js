import React, { useState, useEffect } from "react";
import cardsData from "./retreats.json";
import wooData from "./woo-retreats.json";
import axios from "axios";

const RetreatCards = () => {
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
    <div className="row px-0 mx-0">
      {retreatProducts.map((ini, i) => {
        const icon = serachsvg(ini.name);

        return (
          <div className="col-lg-3 col-md-6 mb-4 mx-auto" key={ini.id}>
            <div className="card w-100 txtSecondary card-retreats h-100" onClick={() => HandleRedirect(ini.permalink)}>
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
    </div>
  );
};

export default RetreatCards;
